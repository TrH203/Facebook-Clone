const status = require("http-status");

const featureModel = require("../models/features.js");

const has = require('has-keys');

const getAllFeature = async (req, res) => {
    const allFeature = await featureModel.findAll();
    console.log(allFeature);
    res.json(allFeature)
}


module.exports = {
    getAllFeature: getAllFeature,
}


