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

export const sequelize =  new Sequelize('customer_app', 'sa', 'ye2991noh', { 
  host: "localhost",
  dialect: 'mssql',
  login:false,
  define:{
    "timestamps":false,
    "freezeTableName":true,  
    "underscored": true
  }
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});

