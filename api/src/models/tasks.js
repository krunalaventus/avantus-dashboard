import Sequelize from 'sequelize';
import { sequelize } from '../database/database'
import User from './users';


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
User.belongsTo(Tasks, { foreignKey:'id', targetKey: 'customer_id'})
Tasks.hasOne(User, { foreignKey:'id', targetKey: 'customer_id' }) 
