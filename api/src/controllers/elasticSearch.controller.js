import ElasticSearchService from '../services/elasticSearch.service'
import { checkCode } from '../utility/statusCode';
import "@babel/polyfill"

export function getSearchResult(req, res) {
    try{
        return ElasticSearchService.search(req.params, res);
    }catch(err){
        res.status(500).json({
            statusCode:500,
            error:err,
            success: false,
            message:"Something went wrong!"
        })
    }
}

export async function indexCompany(req, res) {
    try{
        let data = await ElasticSearchService.companyIndex();
        if(data){
            res.json(data);
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

export async function indexBrand(req, res) {
    try{
        let data = await ElasticSearchService.brandIndex();
        if(data){
            res.json(data);
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

export async function indexCategory(req, res) {
    try{
        let data = await ElasticSearchService.categoryIndex();
        if(data){
            res.json(data);
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

export async function indexProduct(req, res) {
    try{
        let data = await ElasticSearchService.productIndex();
        if(data){
            res.json(data);
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