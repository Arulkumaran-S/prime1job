const mongoose = require('mongoose');

const ourJobSchema = new mongoose.Schema({
  subtitle: String,
  heading: String,
  categories: [String],
  allJobsButtonText: String,
  imageURL: String
});

module.exports = mongoose.model('OurJobSection', ourJobSchema);
