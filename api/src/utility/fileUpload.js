import multer from 'multer';
import "@babel/polyfill"
import * as fs from 'fs'

// file upload code
const storage = multer.diskStorage({ //multers disk storage settings
    destination: function(req, file, cb) {
        let fileType = "";
        if(req.originalUrl.includes('user')){
            fileType = "user";
        } else if(req.originalUrl.includes('country')){
            fileType = "country";
        } else if(req.originalUrl.includes('company')){
            fileType = "company";
        } else if(req.originalUrl.includes('brand')){
            fileType = "brand";
        } else if(req.originalUrl.includes('category')){
            fileType = "category";
        } else if(req.originalUrl.includes('product') || req.originalUrl.includes('productimage')){
            fileType = "product";
        } else if(req.originalUrl.includes('slider')){
            fileType = "slider";
        }  else if(req.originalUrl.includes('quiz')){
            fileType = "quiz";
        } else if(req.originalUrl.includes('quiz-ques-ans')){
            fileType = "question";
        }  else if(req.originalUrl.includes('ecommerce')){
            fileType = "ecommerce";
        }

        cb(null, './uploads/' + fileType)
    },
    filename: function(req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, 'godesi' + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
    }
});

export const uploadPhoto = multer({storage: storage});