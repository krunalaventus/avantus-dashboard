import {Sequelize, QueryTypes} from "sequelize";
const Op = Sequelize.Op;
import {
    checkCode
} from "../utility/statusCode";
import "@babel/polyfill";
import User from "../models/users";
import ImapEmails from "../models/imapemails";
import Emails from "../models/emails";
import { sequelize } from "../database/database";
const fs = require('fs');
const path = require('path'); 
const empty = require('empty-folder');

exports.getAllImapEmails = async function(req, res) {
    try {
        let createdata = {};
        var decodedData = req.decoded.data;
        createdata = await sequelize.query(`select a.* from imapEmails a where a.customer_id = ${decodedData.id} and a.x_gm_label in ('FB - Positive Response','FB - Referral','FB - Deferred Interest') order by a.id desc`, { type: QueryTypes.SELECT });
        
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

exports.getAllImapEmailsLabel = async function(req, res) {
  try {
      let createdata = {};
      var decodedData = req.decoded.data;
      createdata = await sequelize.query(`select a.* from imapEmails a where a.customer_id = ${decodedData.id} and a.x_gm_label='${req.params.label}'`, { type: QueryTypes.SELECT });
      
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
        let response = []
        let findsingle =await ImapEmails.findOne({
            where:{
                id:params.id,
            }
        });
        let find = await ImapEmails.findAll({
            where:{
                [Op.or]: [{x_gm_thrid:findsingle.x_gm_thrid},{ id:params.id}]
            }, order: [['id','DESC']]
        });
        let loopno = 0;

        var fs = require("fs"),
        path = require("path"),
        util = require("util");
        find.forEach(async element => {
            fs.readFile(path.join(`imap/${element.email_id}/msg-${element.email_seq}.txt`), 'utf8', async function (err, data) {
                if (err) {
                    console.log("==================================")
                    console.log(element.id)
                }
                // var quotedPrintable = require('quoted-printable');
                // var utf8 = require('utf8');
                // var gdata = quotedPrintable.decode(data ?? '').toString('utf8');
                // const simpleParser = require('mailparser').simpleParser;
                // let gdata = await simpleParser(data??'');
                // const gdata= decodeURI(data ?? '');
                //.replace(/3D"/g, '"').replace(/=09/g,'').replace(/=20/g,'').replace(/=C2=A0=/g,'').replace(/=C2=A0/g,'').replace(/=C2=A9/g,'').replace(/=E2=82=B9/g,'').replace(/<=\r\n/g, '<').replace(/=\r\n/g,'');
                // var gdata = new Buffer(data.replace(/=([A-Fa-f0-9]{2})/g, function(m, byte) {
                //   return String.fromCharCode(parseInt(byte, 16));
                // }), 'binary').toString('utf8');
                // 
                response.push({data: element, body: ""})
                loopno = loopno + 1;
                if(loopno === find.length)
                {
                    res.json({
                        statusCode: 200,
                        success: true,
                        message: "Emails fetch Successfully",
                        data: response,
                    });
                }
    
            });    
        });
        
    } catch (e) {
        console.log(e)
        res.json({
            statusCode: 400,
            success: false,
            message: 'File not found.'
        });
    }
};

exports.loadEmails =async function(req, res){
    var decodedData = req.decoded.data;
    const email = await Emails.findOne({where:{status: 1, customer_id: decodedData.id}});
    try{
      if (!fs.existsSync(`imap/${email.id}`)) {
        fs.mkdirSync(`imap/${email.id}`);
      }
      var Imap = require('imap'),
          inspect = require('util').inspect;

      var imap = new Imap({
        user: email.username,
        password: email.password,
        host: email.server_address,
        port: email.port,
        tls: true
      });
      email.last_updated_uid = email.last_updated_uid === undefined || email.last_updated_uid === null ? 1 : Number(email.last_updated_uid)+1;
      function openInbox(cb) {
        imap.openBox('lemlist', true, cb);
      }

      imap.once('ready', function() {
        openInbox(function(err, box) {
          if (err) throw err;
          imap.search([ ['x-gm-labels', 'Test'] ], function(err, results) {
            if (err) throw err;
            var f = imap.fetch(`1:*`, { bodies: ['HEADER.FIELDS (FROM TO SUBJECT DATE)','2']});
            f.on('message', function(msg, seqno) {
              let imapEmails =  {
                email_date:'',
                email_subject:'',
                email_from:'',
                email_to:'',
                customer_id:0,
                email_id:0,
                email_uid:'',
                email_date_o:'',
                email_modseq:'',
                x_gm_label:'',
                x_gm_msgid:'',
                x_gm_thrid:'',
                email_seq: 0
            };
              imapEmails.customer_id = email.customer_id;
              imapEmails.email_id = email.id;
              imapEmails.email_seq = seqno;
              var prefix = '(#' + seqno + ') ';
              
              msg.on('body', function(stream, info) {
                var buffer = '', count = 0;
                // console.log(prefix + 'Body');
                
                // stream.pipe(fs.createWriteStream(`imap/${email.id}/msg-${seqno}.txt`));
                stream.on('data', function(chunk) {
                  count += chunk.length;
                  buffer += chunk.toString('utf8');
                  if (info.which === '2')
                  {
                    // console.log(prefix + 'Body [%s] (%d/%d)', inspect(info.which), count, info.size);
                  }
                });
                stream.once('end', function() {
                  if (info.which !== '2')
                  {
                    const rawData=inspect(Imap.parseHeader(buffer))
                                  .replace(/\n/g,'')
                                  .replace(/`/g,'\'')
                                  .replace(/    /g,' ')
                                  .replace(/  /g,' ')
                                  .replace(/'/g,'"')
                                  .replace(/\[ "/g,'[ \'')
                                  .replace(/" ]/g,'\' ]')
                                  .replace(/"/g, '')
                                  .replace(/'/g, '"')
                                  .replace(/Re:/g, 'Re')
                                  .replace(/Undeliverable:/g, 'Undeliverable')
                                  .replace(/Fwd:/g, 'Fwd')
                                  .replace(/Automatic reply:/g, 'Automatic reply')
                                  .replace(/([a-z]+)(: ?[\[\n])/g, '"$1"$2');
                    const data = JSON.parse(rawData)
                    console.log(data);
                    try{
                    imapEmails.email_date = data.date[0];
                    imapEmails.email_subject = data.subject[0];
                    var email_from = data.from[0].substring(
                      data.from[0].lastIndexOf("<") + 1, 
                      data.from[0].lastIndexOf(">")
                    );
                    imapEmails.email_from = email_from === ""||email_from === null||email_from === undefined ? data.from[0]: email_from;
                    var email_to = data.to[0].substring(
                      data.to[0].lastIndexOf("<") + 1, 
                      data.to[0].lastIndexOf(">")
                    );
                    imapEmails.email_to = email_to === ""||email_to === null||email_to === undefined ? data.to[0]: email_to;
                    }
                    catch(ex){

                    }
                    // console.log(data.date[0]);
                    // console.log(data.subject[0]);
                    // console.log(data.from[0]);
                    // console.log(data.to[0]);
                  }
                  else{
                    // console.log("=======================================")
                    // console.log(prefix + 'Body [%s] Finished', inspect(info.which));
                  }
                });
              });
              msg.once('attributes', async function(attrs) {
                const rawattributes = inspect(attrs, false, 8).replace('date: ','date: \'').replace('Z,','Z\',').replace(/'/g,'"').replace(/\[ "/g,'[ \'').replace(/" ]/g,'\' ]').replace(/'/g, '"').replace(/-/g,'_').replace('date','"date"').replace('uid','"uid"').replace('modseq','"modseq"').replace('flags','"flags"');
                // console.log(rawattributes)
                const data = JSON.parse(rawattributes)
                imapEmails.email_uid = data.uid;
                imapEmails.email_date_o = data.date_o;
                imapEmails.email_modseq = data.modseq;
            
                if(data.x_gm_labels.indexOf("lemlist/FB _ Deferred Interest") !== -1)
                {
                  imapEmails.x_gm_label = "FB - Deferred Interest";
                }
                else if (data.x_gm_labels.indexOf("lemlist/FB _ Polite Decline") !== -1)
                {
                  imapEmails.x_gm_label = "FB - Polite Decline";
                }
                else if(data.x_gm_labels.indexOf("lemlist/FB _ Positive Response") !== -1)
                {
                  imapEmails.x_gm_label = "FB - Positive Response";
                }
                else if(data.x_gm_labels.indexOf("lemlist/FB _ Referral") !== -1)
                {
                  imapEmails.x_gm_label = "FB - Referral";
                }
                // imapEmails.x_gm_label = data.x_gm_label;
                imapEmails.x_gm_msgid = data.x_gm_msgid;
                imapEmails.x_gm_thrid = data.x_gm_thrid;
                allImapEmails.push(imapEmails);
                // console.log(data.date)
                // console.log(data.uid)
                // console.log(data.modseq)
                // console.log(data.x_gm_label)
                // console.log(data.x_gm_msgid)
                // console.log(data.x_gm_thrid)
                
              });
              msg.once('end', function() {
                // console.log(prefix + 'Finished');
              });
            });
            f.once('error', function(err) {
              // console.log('Fetch error: ' + err);
            });
            f.once('end', async function() {
              // console.log('Done fetching all messages!');
              ///await Emails.update({last_updated_uid: lastUid}, {where: { id: email.id }});
                await ImapEmails.bulkCreate(allImapEmails);
                await sequelize.query("UPDATE im SET flag = gm.x_gm_label FROM leads im JOIN imapEmails gm ON (im.email = gm.email_from or im.email = gm.email_to) where gm.x_gm_label != '' and gm.x_gm_label is not null")
              imap.end();
            });
          });
        });
      });

      imap.once('error', function(err) {
        console.log(email)
        console.log(err);
      });

      imap.once('end', function() {
        console.log('Connection ended');
      });

      imap.connect();
    }
    catch(error){
        console.log(error)
    }
}