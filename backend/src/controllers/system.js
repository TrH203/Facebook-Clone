const status = require("http-status");

const featureModel = require("../models/features.js");
const sponsorModel = require("../models/sponsor.js")
const userContractModel = require("../models/userContract.js")
const db = require("../models/database.js")

const has = require('has-keys');
const { QueryTypes } = require("sequelize");

const getAllFeature = async (req, res) => {
    const allFeature = await featureModel.findAll();
    //console.log(allFeature);
    res.json(allFeature);
}

const getSponsor = async (req, res) => {
    //console.log(req);
    const sponsors = await sponsorModel.findAll();
    res.json(sponsors);
}
const getUserContract = async (req, res) => {
    const userId = req.query.userId;
    //console.log(userId);
    const query = `Select * from Friends Where friend1Id = '${userId}' OR friend2Id = '${userId}';`;
    const contracts = await db.query(query, { raw: false, type: QueryTypes.SELECT });
    // console.log(contracts);

    const friendList = [];
    contracts.forEach(element => {
        if (element.friend1Id != userId) {
            console.log(element);
            friendList.push(element.friend1Id)
        }
        else if (element.friend2Id !== userId) {
            friendList.push(element.friend2Id)
        }
    });

    //console.log(friendList);

    let query2;
    const rs = [];
    await Promise.all(friendList.map(async (item) => {
        query2 = `Select * from userInfo Where id = '${item}';`
        const friendInfo = await db.query(query2, { raw: false, type: QueryTypes.SELECT });
        console.log(friendInfo[0]);
        rs.push(friendInfo[0]);
    }));
    res.json(rs);
}

module.exports = {
    getAllFeature: getAllFeature,
    getSponsor: getSponsor,
    getUserContract: getUserContract,
}


