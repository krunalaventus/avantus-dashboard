import TaskServices from '../services/tasks.service'
import { createTaskValidation } from '../validation/tasks';
import { checkCode } from '../utility/statusCode';
import "@babel/polyfill"

export async function getAllTasks(req, res) {
    try{
        let logindata = await TaskServices.getAllTask(req, res);
        if(logindata){
            res.json(logindata);
        }
    }catch(err){

        console.log(err);
        res.status(500).json({
            statusCode:await checkCode('error'),
            error:err,
            success: false,
            message:"Something went wrong!"
        })
    }
}

export async function getTask(req, res) {
    try{
        if(!req.params.id){
            return res.json({
                statusCode:await checkCode('validation'),
                success: false,
                message:"Task id required!"
            });
        }
        let logindata = await TaskServices.getSingleTask(req.params, req.body, res);
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

export async function getTaskByCustomers(req, res) {
    try{
        if(!req.params.customer_id){
            return res.json({
                statusCode:await checkCode('validation'),
                success: false,
                message:"customer id required!"
            });
        }
       
        let Taskdata = await TaskServices.getTaskByCustomer(req.params, req.body, res);
        if(Taskdata){
            res.json(Taskdata);
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

export async function createTask(req, res) {
    try{
        let validation =await createTaskValidation(req.body);
        if(validation.success){
          
            let logindata = await TaskServices.create(req.body, res);
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

export async function updateTask(req, res) {
    try{
        if(!req.params.id){
            return res.json({
                statusCode:await checkCode('validation'),
                success: false,
                message:"Task id required!",
                Customer:{}
            });
        }
       
        let logindata = await TaskServices.update(req.params, req.body, res);
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

export async function deleteTask(req, res) {
    try{
        if(!req.params.id){
            return res.json({
                statusCode:await checkCode('validation'),
                success: false,
                message:"Task id required!",
                Customer:{}
            });
        }
        let logindata = await TaskServices.delete(req.params, req.body, res);
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
