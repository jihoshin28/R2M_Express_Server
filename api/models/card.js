const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cardSchema = new Schema({
    // type: {
    //     type: String,
    //     enum: ['Group', 'Private']
    //     // other options: min, max, required, enum(array, what values allowed)
    // },
    cardNumber: {
        type: String,
        required: true
    },
    expDate: {
        type: String,
        required: true
    }, 
    cvc: {
        type: String,
        required: true
    }, 
    customer_id: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    }
})

const locationModel = mongoose.model('Location', cardSchema)

module.exports = locationModel