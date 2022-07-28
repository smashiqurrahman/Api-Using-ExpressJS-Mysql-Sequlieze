const {Sequelize, DataTypes} = require('sequelize');
const dbConfig = require('../config/dbConfig');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAlises: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.products = require('./productModel')(sequelize, DataTypes);
db.user = require('./userModel')(sequelize, DataTypes);


//  this force: true means create table in database with deleteing previous table
//  this force: false means donot create new table
db.sequelize.sync({ force: false }).then(() => {
    console.log('Drop and re-sync db.');
});

module.exports = db;