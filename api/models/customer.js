const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
    // type: {
    //     type: String,
    //     enum: ['Group', 'Private']
    //     // other options: min, max, required, enum(array, what values allowed)
    // },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    orders: [{type: Schema.Types.ObjectId, ref: 'Order'}],
    cards: [{type: Schema.Types.ObjectId, ref: 'Card'}]
});

const customerModel = mongoose.model('Customer', customerSchema)

module.exports = customerModel