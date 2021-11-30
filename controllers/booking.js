const models = require('../models')

const getAllBookings = async(req, res) => {
    let bookings = await models.Booking.findAll()
    if(bookings.length === 0){
        return res.json({"status": "There are no bookings."}).status(200)
    }
    return res.json(bookings).status(200)
}

const getBooking = async(req, res) => {
    console.log(req.params.id)
    let booking = await models.Booking.findOne({
        where: {
            id: req.params.id
        }
    })

    if(!booking){
        return res.json({"error": "Booking not found"}).status(200)
    } else {
        return res.json(booking).status(200)
    }

}

const createBooking = async(req, res) => {
    console.log(req.body.bookingInfo)
    try {
        const newBooking = await models.Booking.create(req.body.bookingInfo)
        res.send(newBooking).status(200)
    } catch(err){
        res.send(err).status(400)
    }
    
}

const updateBooking = async(req, res) => {
    const updatedBooking = await models.Booking.update(req.body.bookingInfo)
    console.log(updatedBooking)
    res.json(updatedBooking).status(200)
}

const deleteBooking = async(req, res) => {
    // await models.Booking.destroy(req.params.id)
}

module.exports = {
    getAllBookings,
    getBooking,
    createBooking,
    updateBooking,
    deleteBooking
}