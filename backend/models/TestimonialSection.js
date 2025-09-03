// models/TestimonialSection.js
const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: String,
  role: String,
  image: String,
  rating: Number,
  text: String,
});

const testimonialSectionSchema = new mongoose.Schema({
  sectionLabel: String,      // e.g. "// Testimonials"
  sectionTitle: String,      // e.g. "What Our Clients Say"
  clients: [testimonialSchema]
});

module.exports = mongoose.model('TestimonialSection', testimonialSectionSchema);
