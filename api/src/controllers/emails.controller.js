import EmailServices from '../services/emails.service'
import { createEmailValidation } from '../validation/emails';
import { checkCode } from '../utility/statusCode';
import "@babel/polyfill"

export async function getAllEmails(req, res) {
    try{
        let logindata = await EmailServices.getAllEmail(req.params, req.body, res);
        if(logindata){
            res.json(logindata);
        }
    }catch(err){
        res.status(500).json({
            statusCode:await checkCode('error'),
            error:err,
            success: false,
            message:"Something went wrong!"
        })
    }
}

export async function getEmail(req, res) {
    try{
        if(!req.params.id){
            return res.json({
                statusCode:await checkCode('validation'),
                success: false,
                message:"Email id required!"
            });
        }
        let logindata = await EmailServices.getSingleEmail(req.params, req.body, res);
        if(logindata){
            res.json(logindata);
        }
    }catch(err){
        res.status(500).json({
            statusCode:await checkCode('error'),
            error:err,
            success: false,
            message:"Something went wrong!"
        })
    }
}

export async function getEmailByUserNames(req, res) {
    try{
        if(!req.params.username){
            return res.json({
                statusCode:await checkCode('validation'),
                success: false,
                message:"customer id required!"
            });
        }
       
        let Emaildata = await EmailServices.getEmailByUserName(req.params, req.body, res);
        if(Emaildata){
            res.json(Emaildata);
        }
    }catch(err){
        res.status(500).json({
            statusCode:await checkCode('error'),
            error:err,
            success: false,
            message:"Something went wrong!"
        })
    }
}



export async function createEmail(req, res) {
    try{
        let validation =await createEmailValidation(req.body);
        if(validation.success){
          
            let logindata = await EmailServices.create(req.body, res);
            if(logindata){
                res.json(logindata);
            }
        }else{
            res.json({
                statusCode: await checkCode('validation'),
                success: false,
                message:validation.message
            })
        }
    }catch(err){
        res.status(500).json({
            statusCode:await checkCode('error'),
            error:err,
            success: false,
            message:"Something went wrong!"
        })
    }
}

export async function updateEmail(req, res) {
    try{
        if(!req.params.id){
            return res.json({
                statusCode:await checkCode('validation'),
                success: false,
                message:"Email id required!",
                Customer:{}
            });
        }
       
        let logindata = await EmailServices.update(req.params, req.body, res);
        if(logindata){
            res.json(logindata);
        }
    }catch(err){
        res.status(500).json({
            statusCode:await checkCode('error'),
            error:err,
            success: false,
            message:"Something went wrong!"
        })
    }
}

export async function deleteEmail(req, res) {
    try{
        if(!req.params.id){
            return res.json({
                statusCode:await checkCode('validation'),
                success: false,
                message:"Email id required!",
                Customer:{}
            });
        }
        let logindata = await EmailServices.delete(req.params, req.body, res);
        if(logindata){
            res.json(logindata);
        }
    }catch(err){
        res.status(500).json({
            statusCode:await checkCode('error'),
            error:err,
            success: false,
            message:"Something went wrong!"
        })
    }
}
