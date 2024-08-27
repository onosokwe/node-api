const Sequelize = require('sequelize')
const db = require('../database/db')

module.exports = db.sequelize.define(
    'products',
    {
        sn: {
            type: Sequelize.STRING,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.STRING
        },
        pid: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        created_on: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false 
    }
)
