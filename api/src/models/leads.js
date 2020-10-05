import Sequelize from 'sequelize';
import { sequelize } from '../database/database'
import User from './users';


const Leads =  sequelize.define('leads', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    },
    campaignId:{
        type: Sequelize.STRING,
    },
    campaignName:{
        type: Sequelize.STRING,
    },
    email:{
        type: Sequelize.STRING
    },
    firstName:{
        type: Sequelize.STRING
    },
    lastName:{
        type: Sequelize.STRING
    },
    picture:{
        type: Sequelize.STRING
    },
    phone:{
        type: Sequelize.STRING,
        defaultValue:1
    },
    linkedinUrl:{
        type: Sequelize.STRING
    },
    companyName: {
        type: Sequelize.STRING
    },
    icebreaker:{
        type: Sequelize.STRING
    },
    Title:{
        type: Sequelize.STRING
    },
    Website:{
        type: Sequelize.STRING
    },
    Industry:{
        type: Sequelize.STRING
    },
    LinkedIn:{
        type: Sequelize.STRING
    },
    notes:{
        type: Sequelize.STRING
    },
    sentStep:{
        type: Sequelize.STRING
    },
    sentAt:{
        type: Sequelize.STRING,
        defaultValue: null
    },
    repliedAt:{
        type: Sequelize.STRING,
        defaultValue: null
    },
    openedAt:{
        type: Sequelize.STRING,
        defaultValue: null
    },
    bouncedAt:{
        type: Sequelize.STRING,
        defaultValue: null
    },
    unsubscribedAt:{
        type: Sequelize.STRING,
        defaultValue: null
    },
    clickedAt:{
        type: Sequelize.STRING,
        defaultValue: null
    },
    customer_id:{
        type: Sequelize.NUMBER,
        defaultValue: null
    },
    flag:{
        type: Sequelize.STRING,
        defaultValue: null
    }
});

export default Leads;