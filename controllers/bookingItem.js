const models = require('../models')

const createBookingItem = async(req, res) => {
    await models.BookingItem.create(req.body.BookingItemInfo, (err, newBookingItem) => {
        if(err){
            return res.send(err).status(500)
        }
        res.json(newBookingItem).status(200)
    })
}

const updateBookingItem = async(req, res) => {
    await models.BookingItem.update(req.body.BookingItemInfo, (err, updatedBookingItem) => {
        if(err){
            return res.send(err).status(500)
        }
        res.json(updatedBookingItem).status(200)
    })
}

const deleteBookingItem = async(req, res) => {
    await models.BookingItem.delete(req.body.BookingItemInfo, (err, deletedBookingItem) => {
        if(err){
            return res.send(err).status(500)
        }
        res.json(deletedBookingItem).status(200)
    })
}

module.exports = {
    getAllBookingItemsForBooking,
    createBookingItem,
    updateBookingItem,
    deleteBookingItem
}