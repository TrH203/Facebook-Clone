const status = require("http-status");

const featureModel = require("../models/features.js");
const sponsorModel = require("../models/sponsor.js")

const has = require('has-keys');

const getAllFeature = async (req, res) => {
    const allFeature = await featureModel.findAll();
    //console.log(allFeature);
    res.json(allFeature);
}

const getSponsor = async (req, res) => {
    console.log(req);
    const sponsors = await sponsorModel.findAll();
    res.json(sponsors);
}

module.exports = {
    getAllFeature: getAllFeature,
    getSponsor: getSponsor
}


