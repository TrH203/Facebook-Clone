
const Sequelize = require('sequelize');

const db = require('./database.js');


const usersContract = db.define('Friends', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    friend1Id: {
        type: Sequelize.INTEGER
    },
    friend2Id: {
        type: Sequelize.INTEGER
    }
})


module.exports = usersContract;