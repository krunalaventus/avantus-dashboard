import Sequelize from "sequelize";
const Op = Sequelize.Op;
import {
    checkCode
} from "../utility/statusCode";
import fs from 'fs';
import "@babel/polyfill";
import Brand from "../models/brands";
import Category from "../models/categories";
import Company from "../models/companies";
import Country from "../models/countries";
import Product from "../models/products";
import ProductImage from "../models/productImage";
import { sequelize } from "../database/database";

exports.search = function(data, res) {
    try {
        var elasticsearch=require('elasticsearch');

        var client = new elasticsearch.Client( {  
            hosts: [
              'https://rtwdrnr1hd:9y9ot8pzsj@godesi-test-7700875858.ap-southeast-2.bonsaisearch.net:443'
            ],
            log: 'trace'
          });
        
        let body = {
          query: {
            multi_match: {
              query: data.searchString,
              fields: [ "name", "company_name", "product_name","brand_name" ]
            }
          }
        };
        return client.search({
                    body
                  }, function (error, response,status){
                      res.json({
                        statusCode: res.statusCode,
                        success: true,
                        message: "Search result",
                        data: response.hits.hits
                    });
                  });

    } catch (e) {
        return {
            statusCode: 500,
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

exports.brandIndex = async function() {
  let brandQuery = 'select a.company_logo, a.wikipedia_link, b.brand_name, b.logo, b.id from companies a join brands b on a.id=b.company_id WHERE a.status=1 and b.status=1';
  let Brands = await sequelize.query(brandQuery,{nest: true})
  if(Brands) {
        try{
        var elasticsearch=require('elasticsearch');

        var client = new elasticsearch.Client( {  
            hosts: [
              'https://rtwdrnr1hd:9y9ot8pzsj@godesi-test-7700875858.ap-southeast-2.bonsaisearch.net:443/brand/1'
            ]
          });
        
        client.indices.create({
            body: {
                mappings: {
                  properties: {
                    id: { type: 'integer' },
                    brand_name: { type: 'text' }
                  }
                }
              }
        },function (error, response,status) {
            if (error){
              console.log("search error: "+error)
            }
        });
        const body = Brands.flatMap(doc => [{ index: { _index: 'brand' } }, doc])

        const { body: bulkResponse } = await client.bulk({ refresh: true, body })
        } catch(err){
            console.log(err);
        }
  }
}
exports.companyIndex = async function() {
  let Companies = await Company.findAll({
    where:{
        status:1
    },
    attributes:["id","company_name", "company_logo", "wikipedia_link"],
    order: [
        ['popularity_index_manual', 'DESC'],
        ['popularity_index_auto', 'DESC']
    ]
  });
  console.log(Companies);
    if(Companies) {
        try{
        var elasticsearch=require('elasticsearch');

        var client = new elasticsearch.Client( {  
            hosts: [
              'https://rtwdrnr1hd:9y9ot8pzsj@godesi-test-7700875858.ap-southeast-2.bonsaisearch.net:443/company/1'
            ]
          });
        
        client.indices.create({
            body: {
                mappings: {
                  properties: {
                    id: { type: 'integer' },
                    company_name: { type: 'text' }
                  }
                }
              }
        },function (error, response,status) {
            if (error){
              console.log("search error: "+error)
            }
        });
        const body = Companies.flatMap(doc => [{ index: { _index: 'company' } }, doc])

        const { body: bulkResponse } = await client.bulk({ refresh: true, body })
        } catch(err){
            console.log(err);
        }
    }
}
exports.categoryIndex = async function() {

    const Categories = await Category.findAll({
      where:{
          status:1
      }
  });
    if(Categories) {
        var elasticsearch=require('elasticsearch');

        var client = new elasticsearch.Client( {  
            hosts: [
              'https://rtwdrnr1hd:9y9ot8pzsj@godesi-test-7700875858.ap-southeast-2.bonsaisearch.net:443/category/1'
            ]
          });
        
          client.indices.create({
            body: {
                mappings: {
                  properties: {
                    id: { type: 'integer' },
                    name: { type: 'text' }
                  }
                }
              }
        },function (error, response,status) {
            if (error){
              console.log("search error: "+error)
            }
        });
        const body = Categories.flatMap(doc => [{ index: { _index: 'category' } }, doc])

        const { body: bulkResponse } = await client.bulk({ refresh: true, body })
    }
}

exports.productIndex = async function() {
  try{
    let query = 'SELECT `products`.*, `product_images`.`id` AS `product_images.id`, `product_images`.`image_url` AS `product_images.image_url`, `category`.`id` AS `category.id`, `category`.`id` AS `category.subcategroy_id`, `category`.`parentid` AS `category.category`, `brand`.`id` AS `brand.id`, `brand`.`brand_name` AS `brand.brand_name`, `brand`.`logo` AS `brand.logo`, `brand->company`.`id` AS `brand.company.id`, `brand->company`.`company_name` AS `brand.company.company_name`, `brand->company`.`wikipedia_link` AS `brand.company.wikipedia_link`, `brand->company->country`.`id` AS `brand.company.country.id`, `brand->company->country`.`country_name` AS `brand.company.country.country_name`, `brand->company->country`.`country_image` AS `brand.company.country.country_image`, `brand->company->country`.`is_local` AS `brand.company.country.is_local` FROM (SELECT `products`.`id`, `products`.`product_name`, `products`.`popularity_index_auto`, `products`.`popularity_index_manual`, `products`.`category_id`, `products`.`brand_id` FROM `products` AS `products` WHERE `products`.`status` = 1 ORDER BY `products`.`id` DESC) AS `products` LEFT OUTER JOIN `product_image` AS `product_images` ON `products`.`id` = `product_images`.`product_id` AND `product_images`.`main_image` = true LEFT OUTER JOIN `categories` AS `category` ON `products`.`category_id` = `category`.`id` LEFT OUTER JOIN `brands` AS `brand` ON `products`.`brand_id` = `brand`.`id` LEFT OUTER JOIN `companies` AS `brand->company` ON `brand`.`company_id` = `brand->company`.`id` LEFT OUTER JOIN `countries` AS `brand->company->country` ON `brand->company`.`country_id` = `brand->company->country`.`id` ORDER BY `products`.`popularity_index_manual` DESC, `products`.`popularity_index_auto`  DESC;';
   
   let Products = await sequelize.query(query,{nest: true})
    console.log(Products);

   if(Products) {
       var elasticsearch=require('elasticsearch');

       var client = new elasticsearch.Client( {  
           hosts: [
             'https://rtwdrnr1hd:9y9ot8pzsj@godesi-test-7700875858.ap-southeast-2.bonsaisearch.net:443/product/1'
           ],
           log: 'trace'
         });
       
         client.indices.create({
           body: {
               mappings: {
                 properties: {
                   id: { type: 'integer' },
                   product_name: { type: 'text' }
                 }
               }
             }
       },function (error, response,status) {
           if (error){
             console.log("search error: "+error)
           }
       });
       const body = Products.flatMap(doc => [{ index: { _index: 'product' } }, doc])

       const { body: bulkResponse } = await client.bulk({ refresh: true, body })
     }
   }
     catch(err){
       console.log(err);
     }
}