// Express
const express = require('express');

// Router
const router = express.Router();

// Controllers
const { getYoutubeDetails } = require('../controllers/youtube');

// Routes
router.route('/').get(getYoutubeDetails);

module.exports = router;
