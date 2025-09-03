// models/Hero.js
const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
  heroHeading: String,
  heroDescription: String,
  locations: [String],
  jobTypes: [String],
  successText: String,
  successImageURL: String,
  bannerImageURL: String,
  captionText: String,
});

module.exports = mongoose.model('Hero', heroSchema);
