import Product from "../models/products";
import ProductImage from "../models/productImage";
import Brand from '../models/brands'
import Category from '../models/categories'
import Country from '../models/countries'
import Company from "../models/companies"
import Sequelize, { json } from "sequelize"
const Op = Sequelize.Op;
import {
    checkCode
} from "../utility/statusCode";
import fs from 'fs';
import "@babel/polyfill";
import { sequelize } from "../database/database";


exports.getAllProduct = async function(params, data, res) {
    try {
        let createdata = await Product.findAll({
            where:{
                status:1,
            },
            include:[{
                model:ProductImage,
                as:'defaulImage',
                where:{
                    main_image:true
                },
                required:false
            },{
                model:Brand
            },{
                model:Category
            }],
            order: [
                ['created_at', 'DESC']
            ]
        });
        if (createdata) {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Product fetch Successfully",
                data: createdata
            };
        } else {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Product not Found!",
                data:[]
            };
        }
    } catch (e) {
        return {
            statusCode: await checkCode("error"),
            success: false,
            error: {
                error_code: e.parent.errno,
                error_type: e.parent.code,
                message:e.name
            },
            message: e.name
        };
    }
};

exports.getAllProductwithLimit = async function(params, data, res) {
    try {
        let condition = {status:1}
        if(params.search_text){
            condition.product_name = { [Op.like]: '%' + params.search_text + '%' }
        }
        let createdata = await Product.findAndCountAll({
            limit: Number(params.limit),
            offset: Number(params.limit)* Number(params.offset),
            where:condition,
            include:[{
                model:ProductImage,
                as:'defaulImage',
                where:{
                    main_image:true
                },
                required:false
            },{
                model:Brand
            },{
                model:Category
            }],
            order: [
                ['id', 'DESC']
            ]
        });
        if (createdata) {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Product fetch Successfully",
                data: createdata
            };
        } else {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Product not Found!",
                data:[]
            };
        }
    } catch (e) {
        return {
            statusCode: await checkCode("error"),
            success: false,
            error: {
                error_code: e.parent.errno,
                error_type: e.parent.code,
                message:e.name
            },
            message: e.name
        };
    }
};

exports.getAllProductwithCategory = async function(params, data, res) {
    try {
        let query = 'SELECT `products`.*, `product_images`.`id` AS `product_images.id`, `product_images`.`image_url` AS `product_images.image_url`, `category`.`id` AS `category.id`, `category`.`id` AS `category.subcategroy_id`, `category`.`parentid` AS `category.category`, `brand`.`id` AS `brand.id`, `brand`.`brand_name` AS `brand.brand_name`, `brand`.`logo` AS `brand.logo`, `brand->company`.`id` AS `brand.company.id`, `brand->company`.`company_name` AS `brand.company.company_name`, `brand->company`.`wikipedia_link` AS `brand.company.wikipedia_link`, `brand->company->country`.`id` AS `brand.company.country.id`, `brand->company->country`.`country_name` AS `brand.company.country.country_name`, `brand->company->country`.`country_image` AS `brand.company.country.country_image`, `brand->company->country`.`is_local` AS `brand.company.country.is_local` FROM (SELECT `products`.`id`, `products`.`product_name`, `products`.`popularity_index_auto`, `products`.`popularity_index_manual`, `products`.`category_id`, `products`.`brand_id` FROM `products` AS `products` WHERE `products`.`status` = 1 AND `products`.`category_id` = '+params.sub_category_id+' ORDER BY `products`.`id` DESC LIMIT '+params.offset+', '+params.limit+') AS `products` LEFT OUTER JOIN `product_image` AS `product_images` ON `products`.`id` = `product_images`.`product_id` AND `product_images`.`main_image` = true LEFT OUTER JOIN `categories` AS `category` ON `products`.`category_id` = `category`.`id` LEFT OUTER JOIN `brands` AS `brand` ON `products`.`brand_id` = `brand`.`id` LEFT OUTER JOIN `companies` AS `brand->company` ON `brand`.`company_id` = `brand->company`.`id` LEFT OUTER JOIN `countries` AS `brand->company->country` ON `brand->company`.`country_id` = `brand->company->country`.`id` ORDER BY `products`.`popularity_index_manual` DESC, `products`.`popularity_index_auto`  DESC;';
        if(params.filter == 'local'){
            query = 'SELECT `products`.*, `product_images`.`id` AS `product_images.id`, `product_images`.`image_url` AS `product_images.image_url`, `category`.`id` AS `category.id`, `category`.`id` AS `category.subcategroy_id`, `category`.`parentid` AS `category.category`, `brand`.`id` AS `brand.id`, `brand`.`brand_name` AS `brand.brand_name`, `brand`.`logo` AS `brand.logo`,`brand->company`.`id` AS `brand.company.id`, `brand->company`.`company_name` AS `brand.company.company_name`, `brand->company`.`wikipedia_link` AS `brand.company.wikipedia_link`, `brand->company->country`.`id` AS `brand.company.country.id`, `brand->company->country`.`country_name` AS `brand.company.country.country_name`, `brand->company->country`.`country_image` AS `brand.company.country.country_image`, `brand->company->country`.`is_local` AS `brand.company.country.is_local` FROM (SELECT `products`.`id`, `products`.`product_name`, `products`.`popularity_index_auto`, `products`.`popularity_index_manual`, `products`.`category_id`, `products`.`brand_id` FROM `products` AS `products` WHERE `products`.`status` = 1 AND `products`.`category_id` = '+params.sub_category_id+' ORDER BY `products`.`id` DESC LIMIT '+params.offset+', '+params.limit+') AS `products` LEFT OUTER JOIN `product_image` AS `product_images` ON `products`.`id` = `product_images`.`product_id` AND `product_images`.`main_image` = true LEFT OUTER JOIN `categories` AS `category` ON `products`.`category_id` = `category`.`id` LEFT OUTER JOIN `brands` AS `brand` ON `products`.`brand_id` = `brand`.`id` LEFT OUTER JOIN `companies` AS `brand->company` ON `brand`.`company_id` = `brand->company`.`id` LEFT OUTER JOIN `countries` AS `brand->company->country` ON `brand->company`.`country_id` = `brand->company->country`.`id` WHERE `is_local` = 1 ORDER BY `products`.`popularity_index_manual` DESC, `products`.`popularity_index_auto`  DESC;';
        }else if(params.filter == 'foreign'){
            query = 'SELECT `products`.*, `product_images`.`id` AS `product_images.id`, `product_images`.`image_url` AS `product_images.image_url`, `category`.`id` AS `category.id`, `category`.`id` AS `category.subcategroy_id`, `category`.`parentid` AS `category.category`, `brand`.`id` AS `brand.id`, `brand`.`brand_name` AS `brand.brand_name`, `brand`.`logo` AS `brand.logo`,`brand->company`.`id` AS `brand.company.id`, `brand->company`.`company_name` AS `brand.company.company_name`, `brand->company`.`wikipedia_link` AS `brand.company.wikipedia_link`, `brand->company->country`.`id` AS `brand.company.country.id`, `brand->company->country`.`country_name` AS `brand.company.country.country_name`, `brand->company->country`.`country_image` AS `brand.company.country.country_image`, `brand->company->country`.`is_local` AS `brand.company.country.is_local` FROM (SELECT `products`.`id`, `products`.`product_name`, `products`.`popularity_index_auto`, `products`.`popularity_index_manual`, `products`.`category_id`, `products`.`brand_id` FROM `products` AS `products` WHERE `products`.`status` = 1 AND `products`.`category_id` = '+params.sub_category_id+' ORDER BY `products`.`id` DESC LIMIT '+params.offset+', '+params.limit+') AS `products` LEFT OUTER JOIN `product_image` AS `product_images` ON `products`.`id` = `product_images`.`product_id` AND `product_images`.`main_image` = true LEFT OUTER JOIN `categories` AS `category` ON `products`.`category_id` = `category`.`id` LEFT OUTER JOIN `brands` AS `brand` ON `products`.`brand_id` = `brand`.`id` LEFT OUTER JOIN `companies` AS `brand->company` ON `brand`.`company_id` = `brand->company`.`id` LEFT OUTER JOIN `countries` AS `brand->company->country` ON `brand->company`.`country_id` = `brand->company->country`.`id` WHERE `is_local` = 0 ORDER BY `products`.`popularity_index_manual` DESC, `products`.`popularity_index_auto`  DESC;';
        }else if(Number(params.filter)){
            query = 'SELECT `products`.*, `product_images`.`id` AS `product_images.id`, `product_images`.`image_url` AS `product_images.image_url`, `category`.`id` AS `category.id`, `category`.`id` AS `category.subcategroy_id`, `category`.`parentid` AS `category.category`, `brand`.`id` AS `brand.id`, `brand`.`brand_name` AS `brand.brand_name`, `brand`.`logo` AS `brand.logo`, `brand->company`.`id` AS `brand.company.id`, `brand->company`.`company_name` AS `brand.company.company_name`, `brand->company`.`wikipedia_link` AS `brand.company.wikipedia_link`, `brand->company->country`.`id` AS `brand.company.country.id`, `brand->company->country`.`country_name` AS `brand.company.country.country_name`, `brand->company->country`.`country_image` AS `brand.company.country.country_image`, `brand->company->country`.`is_local` AS `brand.company.country.is_local` FROM (SELECT `products`.`id`, `products`.`product_name`, `products`.`popularity_index_auto`, `products`.`popularity_index_manual`, `products`.`category_id`, `products`.`brand_id` FROM `products` AS `products` WHERE `products`.`status` = 1 AND `products`.`category_id` = '+params.sub_category_id+' ORDER BY `products`.`id` DESC LIMIT '+params.offset+', '+params.limit+') AS `products` LEFT OUTER JOIN `product_image` AS `product_images` ON `products`.`id` = `product_images`.`product_id` AND `product_images`.`main_image` = true LEFT OUTER JOIN `categories` AS `category` ON `products`.`category_id` = `category`.`id` LEFT OUTER JOIN `brands` AS `brand` ON `products`.`brand_id` = `brand`.`id` LEFT OUTER JOIN `companies` AS `brand->company` ON `brand`.`company_id` = `brand->company`.`id` LEFT OUTER JOIN `countries` AS `brand->company->country` ON `brand->company`.`country_id` = `brand->company->country`.`id` WHERE `country_id` = '+params.filter+' ORDER BY `products`.`popularity_index_manual` DESC, `products`.`popularity_index_auto`  DESC;'
        }
        let productdata = await sequelize.query(query,{nest: true})
        // let productdata = await Product.findAll({
        //     limit: Number(params.limit),
        //     offset: Number(params.offset),
        //     where:{
        //         status:1,
        //         category_id:Number(params.sub_category_id)
        //     },
        //     attributes:['id', 'product_name','popularity_index_auto', 'popularity_index_manual' ],
        //     include:[{
        //         model:ProductImage,
        //         attributes:['image_url'],
        //         where:{
        //             main_image:true
        //         },
        //         required: false
        //     },{
        //         model:Category,
        //         attributes:[["id", "subcategroy_id"],["parentid", "category"]],
        //     },
        //     {
        //         model:Brand,
        //         attributes:['brand_name','logo'],
        //         include:[{
        //             model : Company,
        //             attributes:['company_name', 'wikipedia_link'],
        //             include:[{
        //                 model : Country,
        //                 attributes:['country_name', 'country_image','is_local'],
        //             }]
        //         }]
        //     }
        // ],
        //     order: [
        //         ['id', 'DESC']
        //     ]
        // });
        if (productdata) {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Product fetch Successfully",
                data: productdata
            };
        } else {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Product not Found!",
                data:[]
            };
        }
    } catch (e) {
        return {
            statusCode: await checkCode("error"),
            success: false,
            error: {
                error_code: e.parent.errno,
                error_type: e.parent.code,
                message:e.name
            },
            message: e.name
        };
    }
};

exports.getAllProductwithBrand = async function(params, data, res) {
    
    try {
        let query = 'SELECT `products`.*, `product_images`.`id` AS `product_images.id`, `product_images`.`image_url` AS `product_images.image_url`, `category`.`id` AS `category.id`, `category`.`id` AS `category.subcategroy_id`, `category`.`parentid` AS `category.category`, `brand`.`id` AS `brand.id`, `brand`.`brand_name` AS `brand.brand_name`, `brand`.`logo` AS `brand.logo`,`brand->company`.`id` AS `brand.company.id`, `brand->company`.`company_name` AS `brand.company.company_name`, `brand->company`.`wikipedia_link` AS `brand.company.wikipedia_link`, `brand->company->country`.`id` AS `brand.company.country.id`, `brand->company->country`.`country_name` AS `brand.company.country.country_name`, `brand->company->country`.`country_image` AS `brand.company.country.country_image`, `brand->company->country`.`is_local` AS `brand.company.country.is_local` FROM (SELECT `products`.`id`, `products`.`product_name`, `products`.`popularity_index_auto`, `products`.`popularity_index_manual`, `products`.`category_id`, `products`.`brand_id` FROM `products` AS `products` WHERE `products`.`status` = 1 AND `products`.`brand_id` = '+params.brand_id+' ORDER BY `products`.`id` DESC LIMIT '+params.offset+', '+params.limit+') AS `products` LEFT OUTER JOIN `product_image` AS `product_images` ON `products`.`id` = `product_images`.`product_id` AND `product_images`.`main_image` = true LEFT OUTER JOIN `categories` AS `category` ON `products`.`category_id` = `category`.`id` LEFT OUTER JOIN `brands` AS `brand` ON `products`.`brand_id` = `brand`.`id` LEFT OUTER JOIN `companies` AS `brand->company` ON `brand`.`company_id` = `brand->company`.`id` LEFT OUTER JOIN `countries` AS `brand->company->country` ON `brand->company`.`country_id` = `brand->company->country`.`id` ORDER BY `products`.`popularity_index_manual` DESC, `products`.`popularity_index_auto`  DESC;';
        if(params.filter == 'local'){
            query = 'SELECT `products`.*, `product_images`.`id` AS `product_images.id`, `product_images`.`image_url` AS `product_images.image_url`, `category`.`id` AS `category.id`, `category`.`id` AS `category.subcategroy_id`, `category`.`parentid` AS `category.category`, `brand`.`id` AS `brand.id`, `brand`.`brand_name` AS `brand.brand_name`, `brand`.`logo` AS `brand.logo`,`brand->company`.`id` AS `brand.company.id`, `brand->company`.`company_name` AS `brand.company.company_name`, `brand->company`.`wikipedia_link` AS `brand.company.wikipedia_link`, `brand->company->country`.`id` AS `brand.company.country.id`, `brand->company->country`.`country_name` AS `brand.company.country.country_name`, `brand->company->country`.`country_image` AS `brand.company.country.country_image`, `brand->company->country`.`is_local` AS `brand.company.country.is_local` FROM (SELECT `products`.`id`, `products`.`product_name`, `products`.`popularity_index_auto`, `products`.`popularity_index_manual`, `products`.`category_id`, `products`.`brand_id` FROM `products` AS `products` WHERE `products`.`status` = 1 AND `products`.`brand_id` = '+params.brand_id+' ORDER BY `products`.`id` DESC LIMIT '+params.offset+', '+params.limit+') AS `products` LEFT OUTER JOIN `product_image` AS `product_images` ON `products`.`id` = `product_images`.`product_id` AND `product_images`.`main_image` = true LEFT OUTER JOIN `categories` AS `category` ON `products`.`category_id` = `category`.`id` LEFT OUTER JOIN `brands` AS `brand` ON `products`.`brand_id` = `brand`.`id` LEFT OUTER JOIN `companies` AS `brand->company` ON `brand`.`company_id` = `brand->company`.`id` LEFT OUTER JOIN `countries` AS `brand->company->country` ON `brand->company`.`country_id` = `brand->company->country`.`id` WHERE `is_local` = 1 ORDER BY `products`.`popularity_index_manual` DESC, `products`.`popularity_index_auto`  DESC;';
        }else if(params.filter == 'foreign'){
            query = 'SELECT `products`.*, `product_images`.`id` AS `product_images.id`, `product_images`.`image_url` AS `product_images.image_url`, `category`.`id` AS `category.id`, `category`.`id` AS `category.subcategroy_id`, `category`.`parentid` AS `category.category`, `brand`.`id` AS `brand.id`, `brand`.`brand_name` AS `brand.brand_name`, `brand`.`logo` AS `brand.logo`,`brand->company`.`id` AS `brand.company.id`, `brand->company`.`company_name` AS `brand.company.company_name`, `brand->company`.`wikipedia_link` AS `brand.company.wikipedia_link`, `brand->company->country`.`id` AS `brand.company.country.id`, `brand->company->country`.`country_name` AS `brand.company.country.country_name`, `brand->company->country`.`country_image` AS `brand.company.country.country_image`, `brand->company->country`.`is_local` AS `brand.company.country.is_local` FROM (SELECT `products`.`id`, `products`.`product_name`, `products`.`popularity_index_auto`, `products`.`popularity_index_manual`, `products`.`category_id`, `products`.`brand_id` FROM `products` AS `products` WHERE `products`.`status` = 1 AND `products`.`brand_id` = '+params.brand_id+' ORDER BY `products`.`id` DESC LIMIT '+params.offset+', '+params.limit+') AS `products` LEFT OUTER JOIN `product_image` AS `product_images` ON `products`.`id` = `product_images`.`product_id` AND `product_images`.`main_image` = true LEFT OUTER JOIN `categories` AS `category` ON `products`.`category_id` = `category`.`id` LEFT OUTER JOIN `brands` AS `brand` ON `products`.`brand_id` = `brand`.`id` LEFT OUTER JOIN `companies` AS `brand->company` ON `brand`.`company_id` = `brand->company`.`id` LEFT OUTER JOIN `countries` AS `brand->company->country` ON `brand->company`.`country_id` = `brand->company->country`.`id` WHERE `is_local` = 0 ORDER BY `products`.`popularity_index_manual` DESC, `products`.`popularity_index_auto`  DESC;';
        }else if(Number(params.filter)){
            query = 'SELECT `products`.*, `product_images`.`id` AS `product_images.id`, `product_images`.`image_url` AS `product_images.image_url`, `category`.`id` AS `category.id`, `category`.`id` AS `category.subcategroy_id`, `category`.`parentid` AS `category.category`, `brand`.`id` AS `brand.id`, `brand`.`brand_name` AS `brand.brand_name`, `brand`.`logo` AS `brand.logo`, `brand->company`.`id` AS `brand.company.id`, `brand->company`.`company_name` AS `brand.company.company_name`, `brand->company`.`wikipedia_link` AS `brand.company.wikipedia_link`, `brand->company->country`.`id` AS `brand.company.country.id`, `brand->company->country`.`country_name` AS `brand.company.country.country_name`, `brand->company->country`.`country_image` AS `brand.company.country.country_image`, `brand->company->country`.`is_local` AS `brand.company.country.is_local` FROM (SELECT `products`.`id`, `products`.`product_name`, `products`.`popularity_index_auto`, `products`.`popularity_index_manual`, `products`.`category_id`, `products`.`brand_id` FROM `products` AS `products` WHERE `products`.`status` = 1 AND `products`.`brand_id` = '+params.brand_id+' ORDER BY `products`.`id` DESC LIMIT '+params.offset+', '+params.limit+') AS `products` LEFT OUTER JOIN `product_image` AS `product_images` ON `products`.`id` = `product_images`.`product_id` AND `product_images`.`main_image` = true LEFT OUTER JOIN `categories` AS `category` ON `products`.`category_id` = `category`.`id` LEFT OUTER JOIN `brands` AS `brand` ON `products`.`brand_id` = `brand`.`id` LEFT OUTER JOIN `companies` AS `brand->company` ON `brand`.`company_id` = `brand->company`.`id` LEFT OUTER JOIN `countries` AS `brand->company->country` ON `brand->company`.`country_id` = `brand->company->country`.`id` WHERE `country_id` = '+params.filter+' ORDER BY `products`.`popularity_index_manual` DESC, `products`.`popularity_index_auto`  DESC;'
        }
        let productdata = await sequelize.query(query,{nest: true})
        // let productdata = await Product.findAll({
        //     limit: Number(params.limit),
        //     offset: Number(params.offset),
        //     where:{
        //         status:1,
        //         brand_id:Number(params.brand_id)
        //     },
        //     attributes:['id', 'product_name','popularity_index_auto', 'popularity_index_manual' ],
        //     include:[{
        //         model:ProductImage,
        //         attributes:['image_url'],
        //         where:{
        //             main_image:true   
        //         },
        //         required: false
        //     },{
        //         model:Category,
        //         attributes:[["id", "subcategroy_id"],["parentid", "category"]]
        //     },
        //     {
        //         model:Brand,
        //         attributes:['brand_name'],
        //         as : 'brand',
        //         include:[{
        //             model : Company,
        //             attributes:['company_name', 'wikipedia_link'],
        //             include:[{
        //                 model : Country,
        //                 attributes:['country_name', 'country_image','is_local']
        //             }]
        //         }]
        //     }
        // ],
        //     order: [
        //         ['id', 'DESC']
        //     ]
        // });
        if (productdata) {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Product fetch Successfully",
                data: productdata
            };
        } else {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Product not Found!",
                data:[]
            };
        }
    } catch (e) {
        return {
            statusCode: await checkCode("error"),
            success: false,
            error: {
                error_code: e.parent.errno,
                error_type: e.parent.code,
                message:e.name
            },
            message: e.name
        };
    }
};

exports.getSingleProduct = async function(params, data, res) {
    try {
        let find = await Product.findOne({
            where:{
                id:params.id,
                status:1
            },
            include:[{
                model:ProductImage,
                as:'defaulImage',
                where:{
                    main_image:true
                },
                required:false
            },{
                model:ProductImage,
            },{
                model:Brand
            },{
                model:Category
            }]
        });
        if (find) {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Product fetch Successfully",
                data: find
            };
        } else {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Product not Found!",
            };
        }
    } catch (e) {
        console.log(e)
        return {
            statusCode: await checkCode("error"),
            success: false,
            error: {
                error_code: e.parent.errno,
                error_type: e.parent.code,
                message:e.name
            },
            message: e.name
        };
    }
};

exports.create = async function(data, res) {
    try {
            let create  = await Product.create(data);
            if(create){
                let body = [];
                if(data.images.length>0){
                    await data.images.forEach((element, index) => {
                        let bodyObj = {};
                        if(Number(data.selected_image)===index+1){
                            bodyObj.main_image=true;
                        }else{
                            bodyObj.main_image=false;
                        }
                        bodyObj.product_id = create.dataValues.id;
                        bodyObj.image_url = element.path;
                        bodyObj.status = 1;
                        bodyObj.created_at = new Date();
                        bodyObj.updated_at = new Date();
                        body.push(bodyObj);
                    });

                    let imagecreate = ProductImage.bulkCreate(body);
                    var elasticsearch=require('elasticsearch');

                    var client = new elasticsearch.Client( {  
                        hosts: [
                          'https://rtwdrnr1hd:9y9ot8pzsj@godesi-test-7700875858.ap-southeast-2.bonsaisearch.net:443/product/1'
                        ],
                        log: 'trace'
                      });
                    
                    client.indices.create({
                        index: create.id,
                        type: 'product',
                        body: data
                    },function (error, response,status) {
                        if (error){
                          console.log("search error: "+error)
                        }
                    });
                    if(imagecreate){
                        return {
                            statusCode: res.statusCode,
                            success: true,
                            message: "Product create successfully.",
                            data:create
                        };
                    }
                }else{
                    return {
                        statusCode: res.statusCode,
                        success: true,
                        message: "Product create successfully.",
                        data:create
                    };
                }
            }
    } catch (e) {
        return {
            statusCode: await checkCode("error"),
            success: false,
            error: {
                error_code: e.parent.errno,
                error_type: e.parent.code,
                message:e.name
            },
            message: e.name
        };
    }
};

exports.update = async function(params, data, res) {
    try {
        let finddata = await Product.findOne({
            where: {
                id: params.id
            }
        });
        if (finddata) {
            data.updated_date = new Date();
            let updatedata = await finddata.update(data);
            if (updatedata) {
                return {
                    statusCode: res.statusCode,
                    success: true,
                    message: "Product update Successfully",
                    data: updatedata
                };
            }
        } else {
            return {
                statusCode: res.statusCode,
                success: false,
                message: "Product not found!",
            };
        }
    } catch (e) {
        console.log(e)
        return {
            statusCode: await checkCode("error"),
            success: false,
            error: {
                error_code: e.parent.errno,
                error_type: e.parent.code,
                message:e.name
            },
            message: e.name
        };
    }
};

exports.delete = async function(params, data, res) {
    try {
        let find = await Product.findOne({where:{id:params.id}});
        if(find){
            fs.unlink('./'+find.dataValues.Product_logo, function (err) {
                if (err) {
                    console.log(err); 
                };
            });
        }
        let deletedata = await Product.destroy({
            where: {
                id: params.id
            }
        });
        if (deletedata) {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Product Delete Successfully",
            };
        } else {
            return {
                statusCode: res.statusCode,
                success: false,
                message: "Something went wrong!",
            };
        }
    } catch (e) {
        console.log(e)
        return {
            statusCode: await checkCode("error"),
            success: false,
            error: {
                error_code: e.parent.errno,
                error_type: e.parent.code,
                message:e.name
            },
            message: e.name
        };
    }
};
