import Sequelize from 'sequelize';

// export const sequelize =  new Sequelize('demoproject', 'root', '', { 
//   host: "localhost",
//   dialect: 'mysql',
//   login:false,
//   define:{
//     "timestamps":false,
//     "freezeTableName":true,
//     "underscored": true
//   }
// });

var mysql = require('mysql');

export const sequelize =  new Sequelize('customer_app', 'sa', 'ye2991noh', { 
  host: "localhost",
  dialect: 'mssql',
  login:false,
  define:{
    "timestamps":false,
    "freezeTableName":true,  
    "underscored": true
  },
  dialectOptions: {
    requestTimeout: 10000000
  },
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});

