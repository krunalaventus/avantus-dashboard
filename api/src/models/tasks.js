import Sequelize from 'sequelize';
import { sequelize } from '../database/database'


const Tasks =  sequelize.define('tasks', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    },
    task_title:{
        type: Sequelize.STRING,
    },
    task_description:{
        type: Sequelize.STRING
    },
    completion_flag:{
        type: Sequelize.STRING
    },
    customer_id:{
        type: Sequelize.INTEGER
    },
   
});

export default Tasks;
// Product.belongsTo(Brands, { foreignKey:'brand_id'})
// Brands.hasOne(Product, { foreignKey:'id' }) 
