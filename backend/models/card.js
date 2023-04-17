const mongoose = require('mongoose');

const gainInfluenceSchema = new mongoose.Schema({
    any: Number,
    emperor: Number,
    spacingGuild: Number,
    beneGesserit: Number,
    fremen: Number
});

const factionAccessSchema = new mongoose.Schema({
    emperor: Boolean,
    spacingGuilde: Boolean,
    beneGesserit: Boolean,
    fremen: Boolean
});

const fullRewardsListSchema = new mongoose.Schema({
    combatSpace: Boolean,
    drawCard: Number,
    dreadNought: Number,
    gainInfluence: [gainInfluenceSchema],
    geneticMarker: {
        type: mongoose.Schema.Types.Mixed,
        ref: 'geneticMarkerSchema'
    },
    intrigueCard: Number,
    moveFreighter: Number,
    negotiator: Number,
    persuasion: Number,
    research: Number,
    signetRingAbility: Boolean,
    solari: Number,
    specialEffect: String,
    specimen: Number,
    spice: Number,
    strength: Number,
    techTile: Boolean,
    tleilaxuIcon: Number,
    trashCard: Number,
    troop: Number,
    water: Number
});

const fullTagsListSchema = new mongoose.Schema({
    emperor: Boolean,
    spacingGuild: Boolean,
    beneGesserit: Boolean,
    fremen: Boolean
});

const geneticMarkerSchema = new mongoose.Schema({
    "1": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'fullRewardsListSchema'
    },
    "2": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'fullRewardsListSchema'
    }
});

const agentAccessStandardSchema = new mongoose.Schema({
    city: Boolean,
    lansraad: Boolean,
    spiceTrade: Boolean,
    factionAccess: factionAccessSchema
});

const agentAccessInfiltrateSchema = new mongoose.Schema({
    city: Boolean,
    lansraad: Boolean,
    spiceTrade: Boolean,
    factionAccess: factionAccessSchema
});

const agentAccessSchema = new mongoose.Schema({
    standard: agentAccessStandardSchema,
    infiltrate: agentAccessInfiltrateSchema
});

const conditionalRewardSchema = new mongoose.Schema({
    condition: String,
    reward: [fullRewardsListSchema]
});

const dropRewardSchema = new mongoose.Schema({
    drop: Number,
    reward: [fullRewardsListSchema]
});

const tradeRewardSchema = new mongoose.Schema({
    cost: [fullRewardsListSchema],
    reward: [fullRewardsListSchema]
});

const trashRewardSchema = new mongoose.Schema({
    reward: [fullRewardsListSchema]
});

const agentRewardSchema = new mongoose.Schema({
    reward: [fullRewardsListSchema],
    choiceReward: [fullRewardsListSchema],
    conditionalReward: conditionalRewardSchema,
    dropReward: dropRewardSchema,
    graftedReward: [fullRewardsListSchema],
    infiltrateReward: [fullRewardsListSchema],
    tradeReward: tradeRewardSchema,
    trashReward: trashRewardSchema
});

const revealRewardSchema = new mongoose.Schema({
    conditionalReward: conditionalRewardSchema,
    choiceReward: [fullRewardsListSchema],
    fremenBond: [fullRewardsListSchema],
    reward: [fullRewardsListSchema],
    tradeReward: tradeRewardSchema,
});

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  graft: {
    type: Boolean,
    required: true
  },
  special: {
    type: Boolean,
    required: true
  },
  tag: [fullTagsListSchema],
  agentAcces: agentAccessSchema,
  purchaseReward: [fullRewardsListSchema],
  agentReward: [agentRewardSchema],
  droppedReward: [fullRewardsListSchema],
  trashedReward: [fullRewardsListSchema],
  revealReward: revealRewardSchema
});

module.exports = mongoose.model('Card', cardSchema);