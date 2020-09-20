import Sequelize from 'sequelize';
import { sequelize } from '../database/database'


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
   
});

export default Emails;
// Product.belongsTo(Brands, { foreignKey:'brand_id'})
// Brands.hasOne(Product, { foreignKey:'id' }) 
