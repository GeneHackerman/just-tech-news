// import the sequelize constructor from the library
const Sequelize = require('sequelize');

// loads .env(stores our username and password for mySQL) file
require('dotenv').config();

// create connection to our database, pass in your MySQL information for username and password
// mySQL user/pass will be in .env file for security purposes
let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize;