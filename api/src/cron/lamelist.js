var request = require('request');
const cron = require('node-cron');
const CSVToJSON = require('csvtojson');
const fs = require('fs');
import Sequelize from "sequelize";
const Op = Sequelize.Op;
import User from "../models/users";
import Leads from "../models/leads";

cron.schedule('0 */4 * * *', async function() {
    await Leads.destroy({ truncate: true });
    let allUser = await User.findAll({where:{
        user_role:'customer',
        status: 1
    }});
    console.log(allUser)
    allUser.forEach(user => {
        const auth = "Basic " + new Buffer('' + ":" + user.api_link).toString("base64");
    request({
        uri: 'https://api.lemlist.com/api/campaigns',
        headers : {
            "Authorization" : auth
        }
      },
      async function (error, response, body) {
          var bodyJson = JSON.parse(body);
          for(var element of bodyJson)
          {
              request({
                uri: `https://api.lemlist.com/api/campaigns/${element._id}/export`,
                headers : {
                    "Authorization" : auth
                }
              },
              async function (errorL, responseL, bodyL) {
                  var ld = await Leads.findAll({ limit:1, where: { customer_id: user.id }, order: [ [ 'sentAt', 'DESC' ]]});
                CSVToJSON().fromString(bodyL)
                    .then(async leads => {
                        let filteredLeads;
                        console.log("====================================")
                        console.log(ld)
                        if(ld){
                            var itemsProcessed = 0;
                            filteredLeads = leads;
                            //.filter(d => d.sentAt > ld.sentAt);
                            filteredLeads.forEach(async function(e){
                                if (typeof e === "object" ){
                                    e["customer_id"] = user.id;
                                    e["campaignId"] = element._id;
                                    e["campaignName"] = element.name;                              
                                    e["flag"] = '';                              
                                }
                                itemsProcessed++;
                                if(itemsProcessed === filteredLeads.length) {
                                    await Leads.bulkCreate(filteredLeads);
                                }
                              });
                            
                        }
                        else { 
                            console.log("Mu ate hu")
                            filteredLeads = leads;
                            var itemsProcessed = 0;
                            filteredLeads.forEach(async function(e){
                                if (typeof e === "object" ){
                                    e["customer_id"] = user.id;
                                    e["campaignId"] = element._id;
                                    e["campaignName"] = element.name;                              
                                }
                                itemsProcessed++;
                                if(itemsProcessed === filteredLeads.length) {
                                    await Leads.bulkCreate(filteredLeads);
                                }
                              });
                        }
                        
                    }).catch(err => {
                        // log error if any
                        console.log(err);
                    });
              });
          };
      });
    });
});