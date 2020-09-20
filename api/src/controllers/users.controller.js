import UserServices from '../services/user.service'
import { createUserValidation } from '../validation/user';
import { checkCode } from '../utility/statusCode';
import "@babel/polyfill"


export async function getUsers(req, res) {
    try{
        console.log("as")
        let logindata = await UserServices.getAllUser(req, res);
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

export async function getUser(req, res) {
    try{
        if(!req.params.id){
            return res.json({
                statusCode:await checkCode('validation'),
                success: false,
                message:"customer id required!",
                Customer:{}
            });
        }
        let logindata = await UserServices.getSingleUser(req.params, req.body, res);
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

export async function createUser(req, res) {
    try{
        let validation =await createUserValidation(req.body);
        if(validation.success){
            let logindata = await UserServices.create(req.body, res);
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

export async function signup(req, res) {
    try{
        let validation =await createUserValidation(req.body);
        if(validation.success){
            let userdata = await UserServices.signup(req.body, res);
            if(userdata){
                res.json(userdata);
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




export async function updateUser(req, res) {
    try{
        if(!req.params.id){
            return res.json({
                statusCode:await checkCode('validation'),
                success: false,
                message:"customer id required!",
                Customer:{}
            });
        }
        let logindata = await UserServices.update(req.params, req.body, res);
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

export async function deleteUser(req, res) {
    try{
        if(!req.params.id){
            return res.json({
                statusCode:await checkCode('validation'),
                success: false,
                message:"customer id required!",
                Customer:{}
            });
        }
        let logindata = await UserServices.delete(req.params, req.body, res);
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

export async function login(req, res) {
    try{
        let logindata = await UserServices.loginUser(req.body, res);
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

export async function adminLogin(req, res) {
    try{
        let logindata = await UserServices.loginadmin(req.body, res);
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
