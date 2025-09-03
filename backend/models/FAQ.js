const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  subtitle: { type: String },
  imageUrl: { type: String },
  faqs: [
    {
      question: String,
      answer: String,
    },
  ],
});

module.exports = mongoose.model('FAQ', faqSchema);
