import ImapEmail from '../services/imapEmail.service'
import { checkCode } from '../utility/statusCode';
import "@babel/polyfill"

export async function getAllImapEmails(req, res) {
    try{
        let logindata = await ImapEmail.getAllImapEmails(req, res);
        if(logindata){
            res.json(logindata);
        }
    }catch(err){
        console.log(err)
        res.status(500).json({
            statusCode:await checkCode('error'),
            error:err,
            success: false,
            message:"Something went wrong!"
        })
    }
}

export async function getAllImapEmailsLabel(req, res) {
    try{
        let logindata = await ImapEmail.getAllImapEmailsLabel(req, res);
        if(logindata){
            res.json(logindata);
        }
    }catch(err){
        console.log(err)
        res.status(500).json({
            statusCode:await checkCode('error'),
            error:err,
            success: false,
            message:"Something went wrong!"
        })
    }
}

export async function getEmailDetail(req, res) {
    try{
        if(!req.params.id){
            return res.json({
                statusCode:await checkCode('validation'),
                success: false,
                message:"Email id required!",
                Customer:{}
            });
        }
        await ImapEmail.getEmailDetail(req.params, res);
    }catch(err){
        res.status(500).json({
            statusCode:await checkCode('error'),
            error:err,
            success: false,
            message:"Something went wrong!"
        })
    }
}

export async function loadEmail(req, res) {
    try{
        await ImapEmail.loadEmails(req, res);
    }catch(err){
        res.status(500).json({
            statusCode:await checkCode('error'),
            error:err,
            success: false,
            message:"Something went wrong!"
        })
    }
}