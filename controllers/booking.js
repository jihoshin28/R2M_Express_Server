const models = require('../models')

const getAllBookings = async(req, res) => {
    console.log(req.params.id)
    await models.Booking.findAll({}, (err, bookings) => {
        if(err) {
            return res.send(err).status(500)
        }
        res.json(bookings).status(200)
    })
}

const getBooking = async(req, res) => {
    console.log(req.params.id)
    await models.Booking.find({_id: req.params.id}, (err, booking) => {
        if(err) {
            return res.send(err).status(500)
        }
        res.json(booking).status(200)
    })
}

const createBooking = async(req, res) => {
    await models.Booking.create(req.body.BookingInfo, (err, newBooking) => {
        if(err){
            return res.send(err).status(500)
        }
        res.json(newBooking).status(200)
    })
}

const updateBooking = async(req, res) => {
    await models.Booking.update(req.body.BookingInfo, (err, updatedBooking) => {
        if(err){
            return res.send(err).status(500)
        }
        res.json(updatedBooking).status(200)
    })
}

const deleteBooking = async(req, res) => {
    await models.Booking.delete(req.body.BookingInfo, (err, deletedBooking) => {
        if(err){
            return res.send(err).status(500)
        }
        res.json(deletedBooking).status(200)
    })
}

module.exports = {
    getAllBookings,
    getBooking,
    createBooking,
    updateBooking,
    deleteBooking
}