import Task from "../models/tasks";

import Sequelize from "sequelize";
const Op = Sequelize.Op;
import {
    checkCode
} from "../utility/statusCode";
import fs from 'fs';
import "@babel/polyfill";
import User from "../models/users";

exports.getAllTask = async function(req, res) {
    try {
        let createdata = {};
        var decodedData = req.decoded.data;
        if(req.params.id) {
            createdata = await Task.findAll({ where: { customer_id: req.params.id }, include:[User] });
        }
        if (decodedData.user_role === "super user") {
            createdata = await Task.findAll({ include:[User] });
        } else {
            createdata = await Task.findAll({ where: { customer_id: decodedData.id }, include:[User] });
        }
        if (createdata) {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Task fetch Successfully",
                data: createdata
            };
        } else {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Task not Found!",
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

exports.getTaskByCustomer = async function(params, res) {
    try {
        let find = await Task.findAll({
            where:{
                customer_id:params.id,
            }, include:[User]
        });
        if (find) {
            return {
                statusCode: 200,
                success: true,
                message: "Task fetch Successfully",
                data: find
            };
        } else {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Task not Found!",
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

exports.getSingleTask = async function(params, data, res) {
    try {
        let find = await Task.findOne({
            where:{
                id:params.id,
                status:1
            }
        });
        if (find) {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Task fetch Successfully",
                data: find
            };
        } else {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Task not Found!",
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
        let finddata = await Task.findOne({ where: {task_title:data.task_title}});
        if (finddata) {
            return {
                statusCode: res.statusCode,
                success: false,
                message: "Already exist Task!"
            };
        }else {
            let create  = await Task.create(data);
            if(create){
                var elasticsearch=require('elasticsearch');
                var client = new elasticsearch.Client( {  
                    hosts: [
                      'localhost:443/task/1'
                    ],
                    log: 'trace'
                  });
                
                client.indices.create({
                    index: create.id,
                    type: 'task',
                    body: data
                },function (error, response,status) {
                    if (error){
                      console.log("search error: "+error)
                    }
                });
                return {
                    statusCode: res.statusCode,
                    success: true,
                    message: "Task create successfully.",
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
        let finddata = await Task.findOne({
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
                    message: "Task update Successfully",
                    data: updatedata
                };
            } else {
                return {
                    statusCode: res.statusCode,
                    success: false,
                    message: "Task not update!"
                };
            }
        } else {
            return {
                statusCode: res.statusCode,
                success: false,
                message: "Task not found!",
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

exports.setCompletionFlag = async function(params, res) {
    try {
        let finddata = await Task.findOne({
            where: {
                id: params.id
            }
        });
        if (finddata) {
            let completion_flag = "";
            if(finddata.completion_flag === "COMPLETED") {
                completion_flag = ""
            } else {
                completion_flag = "COMPLETED"
            }
            let updatedata = await Task.update({ completion_flag }, { where: {id: params.id}});
            if (updatedata) {
                return {
                    statusCode: res.statusCode,
                    success: true,
                    message: "Task update Successfully",
                    data: updatedata
                };
            } else {
                return {
                    statusCode: res.statusCode,
                    success: false,
                    message: "Task not update!"
                };
            }
        } else {
            return {
                statusCode: res.statusCode,
                success: false,
                message: "Task not found!",
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
        let find = await Task.findOne({where:{id:params.id}});
      
        let deletedata = await Task.destroy({
            where: {
                id: params.id
            }
        });
        if (deletedata) {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Task Delete Successfully",
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
