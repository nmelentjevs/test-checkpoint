// Route files
const youtube = require('./routes/youtube');
const twitch = require('./routes/twitch');

exports.setRouter = (app) => {
  // Mount routers
  app.use('/youtube', youtube);
  app.use('/twitch', twitch);
};
