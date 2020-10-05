import Sequelize, { QueryTypes } from "sequelize";
const Op = Sequelize.Op;
import {
    checkCode
} from "../utility/statusCode";
import fs from 'fs';
import "@babel/polyfill";
import User from "../models/users";
import Leads from "../models/leads";
import { sequelize } from "../database/database";
import { exec } from "child_process";
var request = require('request');

exports.getAllLeads = async function(req, res) {
    try {
        let createdata = {};
        var decodedData = req.decoded.data;
        if (decodedData.user_role === "super user") {
            createdata = await Leads.findAll();
        } else {
            createdata = await Leads.findAll({ where: { customer_id: decodedData.id }});
        }
        if (createdata) {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Leads fetch Successfully",
                data: createdata
            };
        } else {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Leads not Found!",
                data:[]
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

exports.getGraphData = async function(req, res) {
    try {
        let createdata = {};
        var decodedData = req.decoded.data;
        if (decodedData.user_role === "super user") {
            const sentAt_data = await sequelize.query("select count(a.id) count from leads a where a.sent_at !='' group by SUBSTRING(a.sent_At, 1, 10)", { type: QueryTypes.SELECT });
            console.log(sentAt_data)
            let sentAt_array = [];
            sentAt_data.forEach(element => {
                sentAt_array.push(element.count);
            });
            console.log(sentAt_array)
            const dates = await sequelize.query("select SUBSTRING(a.sent_At, 1, 10) AS date from leads a where a.sent_at !='' group by SUBSTRING(a.sent_At, 1, 10)", { type: QueryTypes.SELECT });
            let dates_array = [];
            dates.forEach(element => {
                dates_array.push(element.date);
            });
            const repliedAt_data = await sequelize.query("select count(a.id) count from leads a where a.replied_at !='' group by SUBSTRING(a.replied_at, 1, 10)", { type: QueryTypes.SELECT });
            let repliedAt_array = [];
            repliedAt_data.forEach(element => {
                repliedAt_array.push(element.count);
            });
            createdata = {
                id: 'widget5',
                chartType: 'line',
                datasets: {
                    today: [
                        {
                            label: 'Count of Sent At',
                            data: sentAt_array,
                            fill: 'start'
                        },
                        {
                            label: 'Count of Replied At',
                            data: repliedAt_array,
                            fill: 'start'
                        }
                    ]
                },
                labels: dates_array,
                options: {
                    spanGaps: false,
                    legend: {
                        display: false
                    },
                    maintainAspectRatio: false,
                    tooltips: {
                        position: 'nearest',
                        mode: 'index',
                        intersect: false
                    },
                    layout: {
                        padding: {
                            left: 24,
                            right: 32
                        }
                    },
                    elements: {
                        point: {
                            radius: 4,
                            borderWidth: 2,
                            hoverRadius: 4,
                            hoverBorderWidth: 2
                        }
                    },
                    scales: {
                        xAxes: [
                            {
                                gridLines: {
                                    display: false
                                },
                                ticks: {
                                    fontColor: 'rgba(0,0,0,0.54)'
                                }
                            }
                        ],
                        yAxes: [
                            {
                                gridLines: {
                                    tickMarkLength: 16
                                },
                                ticks: {
                                    stepSize: 1000
                                }
                            }
                        ]
                    },
                    plugins: {
                        filler: {
                            propagate: false
                        }
                    }
                }
            };
        } else {
            const sentAt_data = await sequelize.query(`select count(a.id) count from leads a where a.sent_at !='' and a.customer_id=${decodedData.id} group by SUBSTRING(a.sent_At, 1, 10)`, { type: QueryTypes.SELECT });
            console.log(sentAt_data)
            let sentAt_array = [];
            sentAt_data.forEach(element => {
                sentAt_array.push(element.count);
            });
            console.log(sentAt_array)
            const dates = await sequelize.query(`select SUBSTRING(a.sent_At, 1, 10) AS date from leads a where a.sent_at !='' and a.customer_id=${decodedData.id} group by SUBSTRING(a.sent_At, 1, 10)`, { type: QueryTypes.SELECT });
            let dates_array = [];
            dates.forEach(element => {
                dates_array.push(element.date);
            });
            const repliedAt_data = await sequelize.query(`select count(a.id) count from leads a where a.replied_at !='' and a.customer_id=${decodedData.id} group by SUBSTRING(a.replied_at, 1, 10)`, { type: QueryTypes.SELECT });
            let repliedAt_array = [];
            repliedAt_data.forEach(element => {
                repliedAt_array.push(element.count);
            });
            createdata = {
                id: 'widget5',
                chartType: 'line',
                datasets: {
                    today: [
                        {
                            label: 'Count of Sent At',
                            data: sentAt_array,
                            fill: 'start'
                        },
                        {
                            label: 'Count of Replied At',
                            data: repliedAt_array,
                            fill: 'start'
                        }
                    ]
                },
                labels: dates_array,
                options: {
                    spanGaps: false,
                    legend: {
                        display: false
                    },
                    maintainAspectRatio: false,
                    tooltips: {
                        position: 'nearest',
                        mode: 'index',
                        intersect: false
                    },
                    layout: {
                        padding: {
                            left: 24,
                            right: 32
                        }
                    },
                    elements: {
                        point: {
                            radius: 4,
                            borderWidth: 2,
                            hoverRadius: 4,
                            hoverBorderWidth: 2
                        }
                    },
                    scales: {
                        xAxes: [
                            {
                                gridLines: {
                                    display: false
                                },
                                ticks: {
                                    fontColor: 'rgba(0,0,0,0.54)'
                                }
                            }
                        ],
                        yAxes: [
                            {
                                gridLines: {
                                    tickMarkLength: 16
                                },
                                ticks: {
                                    stepSize: 1000
                                }
                            }
                        ]
                    },
                    plugins: {
                        filler: {
                            propagate: false
                        }
                    }
                }
            };
        }
        if (createdata) {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Leads fetch Successfully",
                data: createdata
            };
        } else {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Leads not Found!",
                data:[]
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

exports.getTotal = async function(req, res) {
    try {
        let createdata = {
            totalCount: 0,
            openedCount: 0,
            repliedCount: 0,
            clickedCount: 0
        };
        var decodedData = req.decoded.data;
        if (decodedData.user_role === "super user") {
            const totalCount = await sequelize.query("select count(id) as count from leads", { type: QueryTypes.SELECT });
            const openedCount = await sequelize.query("select count(id) as count from leads where opened_at !=''", { type: QueryTypes.SELECT });
            const repliedCount = await sequelize.query("select count(id) as count from leads where replied_at !=''", { type: QueryTypes.SELECT });
            const clickedCount = await sequelize.query("select count(id) as count from leads where clicked_at !=''", { type: QueryTypes.SELECT });
            console.log(totalCount)
            createdata.totalCount = totalCount[0].count;
            createdata.openedCount = openedCount[0].count;
            createdata.repliedCount = repliedCount[0].count;
            createdata.clickedCount = clickedCount[0].count;
        } else {
            const totalCount = await sequelize.query(`select count(id) as count from leads where customer_id=${decodedData.id}`, { type: QueryTypes.SELECT });
            const openedCount = await sequelize.query(`select count(id) as count from leads where opened_at !='' and customer_id=${decodedData.id}`, { type: QueryTypes.SELECT });
            const repliedCount = await sequelize.query(`select count(id) as count from leads where replied_at !='' and customer_id=${decodedData.id}`, { type: QueryTypes.SELECT });
            const clickedCount = await sequelize.query(`select count(id) as count from leads where clicked_at !='' and customer_id=${decodedData.id}`, { type: QueryTypes.SELECT });
            console.log(totalCount)
            createdata.totalCount = totalCount[0].count;
            createdata.openedCount = openedCount[0].count;
            createdata.repliedCount = repliedCount[0].count;
            createdata.clickedCount = clickedCount[0].count;
        }
        if (createdata) {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Leads count fetch Successfully",
                data: createdata
            };
        } else {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Leads not Found!",
                data:[]
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

exports.getLeadsByCustomer = async function(params, res) {
    try {
        let find = await Leads.findAll({
            where:{
                customer_id:params.id,
            }, include:[User]
        });
        if (find) {
            return {
                statusCode: 200,
                success: true,
                message: "Leads fetch Successfully",
                data: find
            };
        } else {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Leads not Found!",
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

exports.delete = async function(req, res) {
    try {
        var decodedData = req.decoded.data;
        var user = await User.findAll({ where:{ id: decodedData.id }})
        const contactId = req.body.contactIds;
        let find = await Leads.findAll({where:{id: {
            [Sequelize.Op.in]: contactId
        }}});
        console.log(find)
        console.log(contactId)
        let executed = 0;
        find.forEach(async element => {
            const auth = "Basic " + new Buffer('' + ":" + user.api_link).toString("base64");
            request({
                uri: `https://api.lemlist.com/api/campaigns/${element.campaignId}/leads/${element.Email}`,
                headers : {
                    "Authorization" : auth
                },
                method: 'DELETE'
            },
            async function (error, response, body) {
                
            });
            executed =executed+1;
            if(executed===find.length)
            {
                await Leads.destroy({
                    where:{id: {
                        [Sequelize.Op.in]: contactId
                      }
                    }
                })
                return {
                    statusCode: 200,
                    success: true,
                    message: "Successfully Deleted",
                    data: "Successfully Deleted"
                };        
            }
        });
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

exports.unsubscribe = async function(req, data, res) {
    try {
        var decodedData = req.decoded.data;
        var user = await User.findAll({ where:{ id: decodedData.id }})
        data.forEach(element => {
            const auth = "Basic " + new Buffer('' + ":" + user.api_link).toString("base64");
            request({
                uri: `https://api.lemlist.com/api/unsubscribes/${element.email}`,
                headers : {
                    "Authorization" : auth
                },
                method: 'POST'
              },
              async function (error, response, body) {
              });    
        });
        
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

exports.allCampaign = async function(req, res) {
    var decodedData = req.decoded.data;
    let user = await User.findOne({where:{
        id: decodedData.id
    }});
        const auth = "Basic " + new Buffer('' + ":" + user.api_link).toString("base64");
    request({
        uri: 'https://api.lemlist.com/api/campaigns',
        headers : {
            "Authorization" : auth
        }
      },
      async function (error, response, body) {
          var bodyJson = JSON.parse(body);
            return {
                statusCode: 200,
                success: true,
                message: "Campaigns Found",
                data: bodyJson
            };                      
          });
}