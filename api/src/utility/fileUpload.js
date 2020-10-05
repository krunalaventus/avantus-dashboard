import multer from 'multer';
import "@babel/polyfill"
import * as fs from 'fs'

// file upload code
const storage = multer.diskStorage({ //multers disk storage settings
    destination: function(req, file, cb) {
        cb(null, './csv/')
    },
    filename: function(req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, 'csv' + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
    }
});

export const uploadPhoto = multer({storage: storage});