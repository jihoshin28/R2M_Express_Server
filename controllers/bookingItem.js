const models = require('../models')

const getAllBookingItemsByBooking = async(req, res) => {
    let bookingItems = await models.BookingItem.findAll({
        where: {
            booking_id: req.body.bookingItemId
        }
    })
    if(bookingItems.length === 0){
        return res.json({"status": "There are no booking items."}).status(200)
    }
    return res.json(bookingItems).status(200)
}

const createBookingItem = async(req, res) => {
    console.log(req.body.bookingItemInfo)
    const newBookingItem = await models.BookingItem.create(req.body.bookingItemInfo)
    // need to add validator logic
    console.log(newBookingItem)
    res.json(newBookingItem).status(200)
}

const updateBookingItem = async(req, res) => {
    const updatedBookingItem = await models.BookingItem.update(req.body.bookingItemInfo)
    console.log(updatedBookingItem)
    res.json(updatedBookingItem).status(200)
}

const deleteBookingItem = async(req, res) => {
    // await models.BookingItem.destroy(req.params.id)
}

module.exports = {
    getAllBookingItemsByBooking,
    createBookingItem,
    updateBookingItem,
    deleteBookingItem
}