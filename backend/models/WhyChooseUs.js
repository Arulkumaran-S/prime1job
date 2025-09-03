// models/WhyChooseUs.js
const mongoose = require('mongoose');

const whyChooseUsSchema = new mongoose.Schema({
  title: String,
  highlight: String,
  subtitle: String,
  description: String,
  features: [String],
  imageURL: String,
  buttonText: String
});

module.exports = mongoose.model('WhyChooseUs', whyChooseUsSchema);
