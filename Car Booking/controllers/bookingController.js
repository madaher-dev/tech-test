const Booking = require('../models/bookings'); // Requiring Models
const Car = require('../models/cars');

exports.checkAvailability = async (req, res) => {
  //The request body should include the desired date range to book car
  try {
    const bookedCars = await Booking.find(
      {
        $or: [
          {
            fromDate: { $lte: new Date(req.body.from) }, // checks that the start date of requested booking is within the queried document date range
            toDate: { $gt: new Date(req.body.from) },
          },
          {
            fromDate: { $lt: new Date(req.body.to) }, // checks that the end date of requested booking is within the queried document date range
            toDate: { $gte: new Date(req.body.to) },
          },
          {
            fromDate: { $gt: new Date(req.body.from) }, // checks that the requested booking starts before and ends after the queried document date range.
            toDate: { $lt: new Date(req.body.to) },
          },
        ],
      },
      'carId'
    );

    // If we decide to add a booking field with array of bookings to each car document, the document might grow
    // very big, but then we could get the booked cars using $eleMatch (as below) which is faster than having 3 queries

    //   const bookedCars = await Car.find({
    //     "booked": {
    //         "$elemMatch": {
    //             "start": { "$gte": new Date(req.body.from) },
    //             "end":   { "$gte": new Date(req.body.to) }
    //         }
    //     }
    // })

    bookedCars = bookedCars.map((item) => item.carId); // Map the booked cars to show only array of booked cars ids to be used as a filter when we query all cars
    const availableCars = await Car.find({ _id: { $nin: bookedCars } }); // Returs all cars that are not in the list of booked cars

    res.status(200).json({
      // Requests return list of available cars in the specified date range
      status: 'success',
      data: availableCars,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};
