const Sequelize = require('sequelize');

const db = require('./database.js');


const sponsors = db.define('sponsors', {
    id: {
        primaryKey: true,
        type: Sequelize.NUMBER
    },
    message: {
        type: Sequelize.STRING
    },
    link: {
        type: Sequelize.STRING
    },
    imagePath: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.STRING
    }
})


module.exports = sponsors;