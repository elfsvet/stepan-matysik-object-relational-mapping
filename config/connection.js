
// import the Sequelize constructor from the library
const Sequelize = require('sequelize');
// to use environment variables to store sensitive data
require('dotenv').config();

// if it is not server implemented use local credential to login in mysql
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
