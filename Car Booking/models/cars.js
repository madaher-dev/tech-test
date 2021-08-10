const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
  brand: String,
  category: {
    type: String,
    enum: {
      values: ['Sedan', 'Convertible', 'FW'],
      message: 'Unsupported Category',
    },
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  availabe: Boolean,
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
