// Middleware
const asyncHandler = require('../middleware/async');

const axios = require('axios');

// @desc    GET Twitch Details
// @route   GET /twitch
// @access  Public

exports.getTwitchDetails = asyncHandler(async (req, res, next) => {
  const { twitchId } = req.query;

  var headers = {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': 'ewqm2mjysn7zauf795r46xithgar27',
  };

  const response = await axios.get(
    `https://api.twitch.tv/kraken/streams/${twitchId}`,
    {
      headers,
    }
  );

  res.status(200).json(response.data);
});
