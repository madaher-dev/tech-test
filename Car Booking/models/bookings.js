const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
  carId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Car',
  },

  borrower: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  fromDate: Date,
  toDate: Date,
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
