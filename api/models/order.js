

// const orderSchema = new Schema({
//     // type: {
//     //     type: String,
//     //     enum: ['Group', 'Private']
//     //     // other options: min, max, required, enum(array, what values allowed)
//     // },
//     customer_id: {type: Schema.Types.ObjectId},
//     driver_id: {type: Schema.Types.ObjectId},
//     vehicle_type: {
//         type: String,
//         required: true,
//     },
//     distance: {
//         type: Number,
//         required: true,
//         validate: {
//             validator : Number.isInteger,
//             message: value => `${value} is not an integer value`
//         }
//     },
//     total: {
//         type: Number,
//         required: true,
//         validate: {
//             validator : Number.isInteger,
//             message: value => `${value} is not an integer value`
//         }
//     },
//     tax: {
//         type: Number,
//         required: true,
//         validate: {
//             validator : Number.isInteger,
//             message   : value => `${value} is not an integer value`
//         }
//     },
//     labor: {
//         type: Number,
//         required: true,
//         validate: {
//             validator : Number.isInteger,
//             message   : value => `${value} is not an integer value`
//         }
//     }, 
//     delivery: {
//         type: Number,
//         required: true,
//         validate: {
//             validator : Number.isInteger,
//             message: value => `${value} is not an integer value`
//         }
//     },
//     description: {
//         type: String
//     },
//     photos: {
//         // how will this be stored?
//         // type: String
//     },
//     contacts: [{
//         name: String, 
//         number: String
//     }],
//     pickupLocation: {
//         coordinates:{
//             lat: String,
//             lng: String
//         },
//         address: {
//             street: String,
//             city: String,
//             state: String,
//             zip_code: String,
//         }
//     },
//     dropoffLocation: {
//         coordinates:{
//             lat: String,
//             lng: String
//         },
//         address: {
//             street: String,
//             city: String,
//             state: String,
//             zip_code: String,
//         }
//     },
//     payment: {
//         payment_type: {type: String},
//         details: {type: Map}
//     }
// }, {timestamps: true}
// )

// const orderModel = mongoose.model('Order', orderSchema)

// module.exports = orderModel