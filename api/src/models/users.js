import Sequelize from 'sequelize';
import { sequelize } from '../database/database'

const User =  sequelize.define('users', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    },
    first_name:{
        type: Sequelize.STRING,
    },
    last_name:{
        type: Sequelize.STRING,
    },
    email:{
        type: Sequelize.STRING,
        unique: true
    },
    user_name:{
        type: Sequelize.STRING,
    },
    password:{
        type: Sequelize.STRING
    },
    api_link:{ 
        type: Sequelize.STRING 
    }, 
    status:{  // 1=active,2=block	
        type: Sequelize.INTEGER,
        defaultValue:1
    }, 
    user_role:{  
        type: Sequelize.ENUM,
        values: ['super user', 'customer'],
        defaultValue: 'customer'
    }, 
    
});

export default User;