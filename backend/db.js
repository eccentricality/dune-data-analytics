// Import required modules
const mongoose = require('mongoose');

// MongoDB connection URL and options
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/dune-data-analysis';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

// Connect to MongoDB
mongoose.connect(MONGODB_URI, options)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));