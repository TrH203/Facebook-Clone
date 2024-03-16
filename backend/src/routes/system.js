const express = require('express');
const router = express.Router();

const system = require('../controllers/system.js');

router.get("/api/features", system.getAllFeature);
router.get("/api/sponsors", system.getSponsor);


module.exports = router;