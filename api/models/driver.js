const mongoose = require('mongoose')
const Schema = mongoose.Schema

const driverSchema = new Schema({
    // type: {
    //     type: String,
    //     enum: ['Group', 'Private']
    //     // other options: min, max, required, enum(array, what values allowed)
    // },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    orders: [{type: Schema.Types.ObjectId, ref: 'Order'}]
})

const driverModel = mongoose.model('Driver', driverSchema)

module.exports = driverModel