import Sequelize from 'sequelize';
import { sequelize } from '../database/database'
import User from './users';


const Emails =  sequelize.define('emails', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    },
    username:{
        type: Sequelize.STRING,
    },
    password:{
        type: Sequelize.STRING,
    },
    server_address:{
        type: Sequelize.STRING
    },
   port:{
        type: Sequelize.INTEGER
    },
    port_a:{
        type: Sequelize.INTEGER
    },
    type:{
        type: Sequelize.STRING
    },
    status:{
        type: Sequelize.STRING,
        defaultValue:1
    },
    customer_id:{
        type: Sequelize.INTEGER
    },
    last_updated_uid:{
        type: Sequelize.INTEGER
    }
});

export default Emails;

User.hasMany(Emails, { foreignKey: 'customer_id' });
Emails.belongsTo(User, { foreignKey: 'customer_id', targetKey: 'id' });
