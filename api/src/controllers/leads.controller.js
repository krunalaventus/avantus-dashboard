import LeadsServices from '../services/leads.service'
import { checkCode } from '../utility/statusCode';
import "@babel/polyfill"

export async function getAllLeads(req, res) {
    try{
        let logindata = await LeadsServices.getAllLeads(req, res);
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

export async function getAllLeadsLabel(req, res) {
    try{
        let logindata = await LeadsServices.getAllLeadsLabel(req, res);
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

export async function getTotal(req, res) {
    try{
        let logindata = await LeadsServices.getTotal(req, res);

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

export async function getGraphData(req, res) {
    try{
        let logindata = await LeadsServices.getGraphData(req, res);
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

export async function deleteLeads(req, res) {
    try{
        let logindata = await LeadsServices.delete(req, res);
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

export async function UnsubscribeLeads(req, res) {
    try{
        const csv=require('csvtojson');
        // Invoking csv returns a promise
        console.log(req.files[0].path);
        const converter=csv()
        .fromFile(`.\\${req.files[0].path}`)
        .then(async (json)=>{
            console.log(json)
            let logindata = await LeadsServices.unsubscribe(req, json, res);
            if(logindata){
                res.json(logindata);
            }
        })
    }catch(err){
        res.status(500).json({
            statusCode:await checkCode('error'),
            error:err,
            success: false,
            message:"Something went wrong!"
        })
    }
}

export async function allCampaigns(req, res) {
    try{
        await LeadsServices.allCampaign(req, res);
    }catch(err){
        res.status(500).json({
            statusCode:await checkCode('error'),
            error:err,
            success: false,
            message:"Something went wrong!"
        })
    }
}