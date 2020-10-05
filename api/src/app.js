import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import methodOverride from 'method-override';
import path from 'path';
import multer from 'multer';
import "@babel/polyfill";

//Importing Routes
import UserRoutes from './routes/users';
import EmailRoutes from './routes/emails';
import TaskRoutes from './routes/tasks';
import LeadsRoutes from './routes/leads';
import ImapEmails from './models/imapemails';
import ImapEmailRoutes from './routes/imapEmail';


const app = express();
//middlewares
app.all('*', function(req, res, next) {
    req.headers['if-none-match'] = 'no-match-for-this';
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Max-Age", "3600");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, x-access-token");
    next(); 
});


app.use('/', express.static(path.join(__dirname, '../app')));
app.use('/imap', express.static(path.join(__dirname, '../imap')));
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '100mb'})); 
app.use(bodyParser.urlencoded({limit: '50mb','extended': 'true'})); 
app.use(bodyParser.json({type: 'application/vnd.api+json'})); 


app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../app', 'index.html'));
})


// file upload code
let storage = multer.diskStorage({ //multers disk storage settings
    destination: function(req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function(req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, 'driverAVL' + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
    }
});

let uploadSingle = multer({ //multer settings
    storage: storage
}).single('file');

/** API for single file upload */
app.post('/api/uploadPhoto', function(req, res) {
    uploadSingle(req, res, function(err) {
        if (err) {
            res.json({
                error_code: 1,
                err_desc: err
            });
            return;
        }
        if(req.file && req.file.path){
            res.json({
                data:req.file,
                statusCode: res.statusCode,
                success: true,
                message: "File upload Successfully",
            });
        }else{
            res.json({
                data:{},
                statusCode: res.statusCode,
                success: false,
                message: "File not uploaded",
            });
        }
    })
});
// app.use('/imap',express.static(__dirname + '\\imap'));
// console.log(__dirname + '\\imap');


//routes
app.use('/api/user', UserRoutes);
app.use('/api/task', TaskRoutes);
app.use('/api/email', EmailRoutes);
app.use('/api/leads', LeadsRoutes);
app.use('/api/imapEmails', ImapEmailRoutes);

export default app;