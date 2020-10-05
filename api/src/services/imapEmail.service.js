import Sequelize from "sequelize";
const Op = Sequelize.Op;
import {
    checkCode
} from "../utility/statusCode";
import "@babel/polyfill";
import User from "../models/users";
import ImapEmails from "../models/imapemails";

exports.getAllImapEmails = async function(req, res) {
    try {
        let createdata = {};
        var decodedData = req.decoded.data;
        if (decodedData.user_role === "super user") {
            createdata = await ImapEmails.findAll();
        } else {
            createdata = await ImapEmails.findAll({ where: { customer_id: decodedData.id }});
        }
        if (createdata) {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Emails fetch Successfully",
                data: createdata
            };
        } else {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Emails not Found!",
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

exports.getImapEmailByCustomer = async function(params, res) {
    try {
        let find = await ImapEmails.findAll({
            where:{
                customer_id:params.id,
            }, include:[User]
        });
        if (find) {
            return {
                statusCode: 200,
                success: true,
                message: "Emails fetch Successfully",
                data: find
            };
        } else {
            return {
                statusCode: res.statusCode,
                success: true,
                message: "Emails not Found!",
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

exports.getEmailDetail = async function(params, res) {
    try {
        let find = await ImapEmails.findOne({
            where:{
                id:params.id,
            }
        });
        var fs = require("fs"),
        path = require("path"),
        util = require("util");
        fs.readFile(path.join(`imap/msg-${find.email_seq}-body${find.customer_id}_${find.email_id}.txt`), 'utf8', function (err, data) {
            if (err) {
                console.log(err);
                process.exit(1);
            }
            console.log(data)
            res.json({
                statusCode: 200,
                success: true,
                message: "Emails fetch Successfully",
                data: find,
                body: data.replace(/3D"/g, '"').replace(/=09/g,'').replace(/=20/g,'').replace(/=C2=A0=/g,'').replace(/=C2=A0/g,'').replace(/=C2=A9/g,'').replace(/=E2=82=B9/g,'').replace(/<=\r\n/g, '<').replace(/=\r\n/g,'')
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