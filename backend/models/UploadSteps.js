const mongoose = require('mongoose');

const stepSchema = new mongoose.Schema({
  icon: String,
  step: String,
  title: String,
  description: String,
});

const uploadStepsSchema = new mongoose.Schema({
  steps: [stepSchema]
});

module.exports = mongoose.model('UploadSteps', uploadStepsSchema);
