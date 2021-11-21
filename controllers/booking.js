const Booking = require('../models/booking')

const getAllBookings= async(req, res) => {
    console.log(req.params.id)
    Booking.findAll({}, (err, bookings) => {
        if(err) {
            return res.send(err).status(500)
        }
        res.json(bookings).status(200)
    })
}

const getBooking= async(req, res) => {
    console.log(req.params.id)
    Booking.find({_id: req.params.id}, (err, booking) => {
        if(err) {
            return res.send(err).status(500)
        }
        res.json(booking).status(200)
    })
}

const createBooking = async(req, res) => {
    try{
        let data = req.body
        res.header('Content-Type', 'application/json')
        const newBooking = new Booking({
            name: data.name,
            email: data.email,
            phone: data.phone,
            move_size: data.move_size,
            weight_total: data.weight_total,
            price_total: data.price_total,
            comments: data.comments,
            
        })
        newBooking.save((err) => {
            if(err) throw err
        }) 
        
        res.json(newBooking).status(200)
    } catch(error){
        res.send(error.message).status(500)
    }
}

const updateBooking = async(req, res) => {
    try{
        const booking = Booking.find({_id: req.params.id})
 
        booking.save((err) => {
            if(err) throw err
        }) 
        res.send(`Removed user with user id ${req.body.user_id} from chat.`).status(200)
    } catch(error){
        res.send(error.message).status(500)
    }
}

const deleteBooking = async(req, res) => {
    try{
        Booking.delete({_id: req.params.id})
        res.send(`Deleted contact with id ${req.params.id}`).status(200)
    } catch(error){
        res.send(error.message).status(500)
    }
}

module.exports = {
    getAllBookings,
    getBooking,
    createBooking,
    updateBooking,
    deleteBooking
}