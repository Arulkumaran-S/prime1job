const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Hero = require('./models/Hero');
const WhyChooseUs = require('./models/WhyChooseUs');
const UploadSteps = require('./models/UploadSteps');
const OurJobSection = require('./models/OurJobSection');
const FAQ = require('./models/FAQ');
const ClientTestimonial = require('./models/TestimonialSection');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// === ROUTES ===

// Get hero section content
app.get('/api/hero', async (req, res) => {
  try {
    const data = await Hero.findOne();
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching hero data');
  }
});

// Get WhyChooseUs content
app.get('/api/why', async (req, res) => {
  try {
    const content = await WhyChooseUs.findOne();
    res.json(content);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch WhyChooseUs content' });
  }
});

// get Upload content 
app.get('/api/upload-steps', async (req, res) => {
  try {
    const data = await UploadSteps.findOne();
    res.json(data.steps);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch upload steps' });
  }
});

// Get ourjob content

app.get('/api/our-job-section', async (req, res) => {
  try {
    const data = await OurJobSection.findOne();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Our Job Section data' });
  }
});


// Fetch entire FAQ page content (heading, subtitle, image, faqs)
app.get('/api/faqs', async (req, res) => {
  try {
    const faqContent = await FAQ.findOne(); // assuming only one FAQ doc exists
    res.json(faqContent);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch FAQ content' });
  }
});

// Get all client testimonials
app.get('/api/testimonials', async (req, res) => {
  try {
    const testimonials = await ClientTestimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch testimonials' });
  }
});

const TestimonialSection = require('./models/TestimonialSection');

app.get('/api/testimonials-section', async (req, res) => {
  try {
    const section = await TestimonialSection.findOne();
    res.json(section);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch testimonial section' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
