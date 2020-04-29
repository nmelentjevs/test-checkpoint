// Express
const express = require('express');

// Router
const router = express.Router();

// Controllers
const { getTwitchDetails } = require('../controllers/twitch');

// Routes
router.route('/').get(getTwitchDetails);

module.exports = router;
