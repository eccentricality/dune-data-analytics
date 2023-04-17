const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
  playerName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
    },
  playedCard: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Agent', agentSchema);