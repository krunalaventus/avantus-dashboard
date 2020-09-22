import Email from "../models/emails";

import Sequelize from "sequelize";
const Op = Sequelize.Op;
import {
    checkCode
} from "../utility/statusCode";
import fs from 'fs';
import "@babel/polyfill";
import User from "../models/users";

exports.getAllEmail = async function(params, data, res) {
    try {
        let createdata = await Email.findAll({ include:[User]
           
        });
        if (createdata) {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Email fetch Successfully",
                data: createdata
            };
        } else {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Email not Found!",
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

exports.getEmailByUserName = async function(params, data, res) {
    try {
        let find = await Email.findOne({
            where:{
                customer_id:params.customer_id,
            }
        });
        if (find) {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Email fetch Successfully",
                data: find
            };
        } else {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Email not Found!",
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
exports.getSingleEmail = async function(params, data, res) {
    try {
        let find = await Email.findOne({
            where:{
                id:params.id,
                status:1
            }
        });
        if (find) {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Email fetch Successfully",
                data: find
            };
        } else {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Email not Found!",
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



exports.getSingleEmail = async function(params, data, res) {
    try {
        let find = await Email.findOne({
            where:{
                id:params.id,
                status:1
            }
        });
        if (find) {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Email fetch Successfully",
                data: find
            };
        } else {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Email not Found!",
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
        let finddata = await Email.findOne({ where: {server_address:data.server_address}});
        if (finddata) {
            return {
                statusCode: res.statusCode,
                success: false,
                message: "Already exist Server Address!"
            };
        }else {
            let create  = await Email.create(data);
            if(create){
                return {
                    statusCode: res.statusCode,
                    success: true,
                    message: "Email create successfully.",
                    data:create
                };
            }
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

exports.update = async function(params, data, res) {
    try {
        let finddata = await Email.findOne({
            where: {
                id: params.id
            }
        });
        if (finddata) {
            
          
            let updatedata = await finddata.update(data);
            if (updatedata) {
                return {
                    statusCode: res.statusCode,
                    success: true,
                    message: "Email update Successfully",
                    data: updatedata
                };
            } else {
                return {
                    statusCode: res.statusCode,
                    success: false,
                    message: "Email Detail not update!"
                };
            }
        } else {
            return {
                statusCode: res.statusCode,
                success: false,
                message: "Email Detail not found!",
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
        let find = await Email.findOne({where:{id:params.id}});
      
        let deletedata = await Email.destroy({
            where: {
                id: params.id
            }
        });
        if (deletedata) {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Email Delete Successfully",
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
