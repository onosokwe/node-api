const Sequelize = require('sequelize')
const db = require('../database/db')

module.exports = db.sequelize.define(
    'tbl_users',
    {
        sn: {
            type: Sequelize.STRING,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
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