require("dotenv").config()
const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize("dbwatches", "lucas", "5962", {
  host: "localhost",
  dialect: "postgres",
  dialectOptions: {
    timezone: 'Etc/GMT-2'
  },
  logging: false
})

module.exports = sequelize
