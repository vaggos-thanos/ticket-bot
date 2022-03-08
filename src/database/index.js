const GuildConfig = require('./models/GuildConfig')

const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PWD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE,
});


module.exports = {
    GuildConfig,
    db,
}