// Middleware
const asyncHandler = require('../middleware/async');
const fetchVideoInfo = require('youtube-info');
const games = require('../games');

// @desc    GET Youtube Details
// @route   GET /youtube
// @access  Public

exports.getYoutubeDetails = asyncHandler(async (req, res, next) => {
  const { videoId } = req.query;

  const { title, description, owner, channelId } = await fetchVideoInfo(
    `${videoId}`
  );
  const gamePlayed = games.find((game) => description.includes(game));

  if (!title) {
    res.status(404).json('Video not found');
  }
  res.status(200).json({ title, description, owner, channelId, gamePlayed });
});
