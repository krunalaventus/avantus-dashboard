import Sequelize from 'sequelize';
import { sequelize } from '../database/database'
import User from './users';
import Email from './emails';


const ImapEmails =  sequelize.define('imapEmails', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    },
    email_date:{
        type: Sequelize.STRING,
    },
    email_subject:{
        type: Sequelize.STRING
    },
    email_from:{
        type: Sequelize.STRING
    },
    email_to:{
        type: Sequelize.STRING
    },
    customer_id:{
        type: Sequelize.INTEGER
    },
    email_id:{
        type: Sequelize.INTEGER
    },
    email_uid:{
        type: Sequelize.INTEGER
    },
    email_date_o:{
        type: Sequelize.STRING
    },
    email_modseq:{
        type: Sequelize.STRING
    },
    x_gm_label:{
        type: Sequelize.STRING
    },
    x_gm_msgid:{
        type: Sequelize.STRING
    },
    x_gm_thrid:{
        type: Sequelize.STRING
    },
    email_seq:{
        type: Sequelize.STRING
    }
});

export default ImapEmails;
// User.belongsTo(Tasks, { foreignKey:'id', targetKey: 'customer_id'})
// Tasks.hasOne(User, { foreignKey:'id', targetKey: 'customer_id' }) 
//AccountGroup
User.hasMany(ImapEmails, { foreignKey: 'customer_id' });
ImapEmails.belongsTo(User, { foreignKey: 'customer_id', targetKey: 'id' });
