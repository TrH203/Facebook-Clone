
const Sequelize = require('sequelize');

const db = require('./database.js');


const features = db.define('features', {
    id: {
        primaryKey: true,
        type: Sequelize.NUMBER
    },
    name: {
        type: Sequelize.STRING
    },
    imagePath: {
        type: Sequelize.STRING
    }
})


module.exports = features;