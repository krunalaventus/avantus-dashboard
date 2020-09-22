import User from "../models/users";
import Sequelize from "sequelize";
const Op = Sequelize.Op;
import {
    checkCode
} from "../utility/statusCode";
import jwt from "jsonwebtoken";
import tokenKey from "../constant/token"
import sha1 from "sha1";
import "@babel/polyfill";

exports.getAllUser = async function(data, res) {
    try {
        let createdata = await User.findAll({where:{
            user_role:'customer'
        }});
        if (createdata) {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Customer fetch Successfully",
                data: createdata
            };
        } else {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Customer not Found!",
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

exports.getSearch = async function(data, res) {
    try {
        let createdata = [];
        if(data.params.searchString){
            createdata = await User.findAll({
                attributes: ['id', ['first_name', 'name']], 
                where: {
                    user_role:'customer',
                    first_name: {$like: `%${data.searchString}`}
            }});
        } else {
            createdata = await User.findAll({
                attributes: ['id', ['first_name', 'name']], 
                where: {
                    user_role:'customer'
            }});
        }
        
        if (createdata) {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Customer fetch Successfully",
                data: createdata
            };
        } else {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Customer not Found!",
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

exports.getSingleUser = async function(params, data, res) {
    try {
        let find = await User.findOne({
            where:{
                id:params.id
            }
        });
        if (find) {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Customer fetch Successfully",
                data: find
            };
        } else {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Customer not Found!",
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
        let finddata = await User.findOne({ where: {email:data.email}});
        if (finddata) {
            console.log(finddata)
            return {
                statusCode: res.statusCode,
                success: false,
                message: "Already exist user!"
            };
        }else {
           
            // data.password =await sha1(data.password);
            console.log(data);
            let create  = await User.create(data);
            if(create){
                let token = await jwt.sign({
                    data: create.dataValues
                },
                tokenKey.name);
                create.dataValues.token = token;
                return {
                    statusCode: res.statusCode,
                    success: true,
                    message: "Customer create successfully.",
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

exports.signup = async function(data, res) {
    try {
        let finddata = await User.findOne({ where: {email:data.email}});
        if (finddata) {
            if(finddata.password == ""){
                let user = {};
                user.password = await sha1(data.password);
                user.first_name = data.first_name;
                user.last_name = data.last_name;
                user.email = data.email;
                user.user_name = data.user_name;
                user.api_link = data.api_link;
                user.user_role = data.user_role;
                let updatedata = await finddata.update(user);
                let token = await jwt.sign({
                    data: updatedata.dataValues
                },
                tokenKey.name);
                updatedata.dataValues.token = token;
                return {
                    statusCode: res.statusCode,
                    success: true,
                    message: "Customer create successfully.",
                    data:updatedata
                };
            }else{
                return {
                    statusCode: res.statusCode,
                    success: false,
                    message: "Already exist user!"
                };
            }
        }else {
           
            data.password =await sha1(data.password);
            let create  = await User.create(data);
            if(create){
                let token = await jwt.sign({
                    data: create.dataValues
                },
                tokenKey.name);
                create.dataValues.token = token;
                return {
                    statusCode: res.statusCode,
                    success: true,
                    message: "Customer create successfully.",
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
        let finddata = await User.findOne({
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
                    message: "Customer update Successfully",
                    data: updatedata
                };
            } else {
                return {
                    statusCode: res.statusCode,
                    success: false,
                    message: "Customer not update!"
                };
            }
        } else {
            return {
                statusCode: res.statusCode,
                success: false,
                message: "Customer not found!",
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

exports.delete = async function(params, data, res) {
    try {
        let deletedata = await User.destroy({
            where: {
                id: params.id
            }
        });
        if (deletedata) {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Customer Delete Successfully",
            };
        } else {
            return {
                statusCode: res.statusCode,
                success: false,
                message: "Something went wrong!",
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

exports.loginUser = async function(data, res) {
    try {
        let finddata = await User.findOne({ where: {user_name: data.email, status: 1}});
        if (finddata) {
            // if (sha1(data.password) === finddata.dataValues.password) {
            if (data.password === finddata.dataValues.password) {
                let updateObj = {
                    android_token: data.android_token,
                    apple_token: data.apple_token
                }
                await finddata.update(updateObj)
                let token = await jwt.sign({
                    data: finddata.dataValues
                },
                tokenKey.name);
                finddata.dataValues.token = token;
                return {
                    user: {
                        uuid: 'XgbuVEXBU5gtSKdbQRP1Zbbby1i1',
                        from: 'custom-db',
                        password: '',
                        role: 'admin',
                        data: {
                            displayName: finddata.first_name,
                            photoURL: 'assets/images/avatars/Arnold.jpg',
                            email: finddata.email,
                            settings: {
                                layout: {
                                    style: 'layout1',
                                    config: {
                                        scroll: 'content',
                                        navbar: {
                                            display: true,
                                            folded: true,
                                            position: 'left'
                                        },
                                        toolbar: {
                                            display: true,
                                            style: 'fixed',
                                            position: 'below'
                                        },
                                        footer: {
                                            display: true,
                                            style: 'fixed',
                                            position: 'below'
                                        },
                                        mode: 'fullwidth'
                                    }
                                },
                                customScrollbars: true,
                                theme: {
                                    main: 'light1',
                                    navbar: 'light1',
                                    toolbar: 'light1',
                                    footer: 'light1'
                                }
                            },
                            shortcuts: ['calendar', 'mail', 'contacts', 'todo']
                        },
                        access_token: token
                    }
                };
            } else {
                return {
                    statusCode: 200,
                    error: {
                        email: 'Check your username/email',
                        password: 'Check your password'
                    }
                };
            }
        } else {
            return {
                statusCode: res.statusCode,
                success: false,
                message: "Email ID/Password not match!"
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

exports.loginadmin = async function(data, res) {
    try {
        let finddata = await User.findOne({ where: {email:data.email, user_role:'admin'}});
        if (finddata) {
            if (sha1(data.password) === finddata.dataValues.password) {
                let token = await jwt.sign({
                    data: finddata.dataValues
                },
                tokenKey.name);
                finddata.dataValues.token = token;
                return {
                    statusCode: res.statusCode,
                    success: true,
                    message: "Super User Login Successfully",
                    user: finddata
                };
            } else {
                return {
                    statusCode: await checkCode("auth"),
                    success: false,
                    message: "Password incorrect!",
                };
            }
        } else {
            return {
                statusCode: res.statusCode,
                success: false,
                message: "Email ID/Password not match!"
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