const Order = require('../models/order')

const getOrders= async(req, res) => {
    // will send get orders with either customer_id or driver_id in body
    if(!!req.body.customer_id){
        await Order.find({customer_id: req.params.customer_id}, (err, orders) => {
            if(err) {
                return res.send(err).status(500)
            }
            res.json(orders).status(200)
        })
    } else if (!!req.body.driver_id) {
        await Order.find({driver_id: req.params.driver_id}, (err, orders) => {
            if(err) {
                return res.send(err).status(500)
            }
            res.json(orders).status(200)
        })
    } else {
        res.json(`You have not enough minerals`).status(200)
    }
}

const getOrder = async(req, res) => {
    await Order.find({_id: req.params.id}, (err, order) => {
        if(err) {
            return res.send(err).status(500)
        }
        res.json(order).status(200)
    })
}

const createOrder = async(req, res) => {
    try{
        res.header('Content-Type', 'application/json')
        let data = req.body

        const newOrder = new Order({
            customer_id: data.customer_id,
            vehicle_type: data.vehicle_type,
            distance: data.distance,
            total: data.total,
            tax: data.tax,
            delivery: data.delivery,
            description: data.description,
            photos: data.photos,
            contacts: data.contacts,
            pickupLocation: data.pickupLocation,
            dropoffLocation: data.dropoffLocation,
            payment: data.payment
        })
        newOrder.save((err) => {
            if(err) throw err
        }) 
        
        res.json({newOrder}).status(200)
    } catch(error){
        res.send(error.message).status(500)
    }
}

const updateOrder = async(req, res) => {
    try{
        const order = Order.find({_id: req.params.id})
 
        order.save((err) => {
            if(err) throw err
        }) 
        res.send(`Updated order with id ${req.params.id}.`).status(200)
    } catch(error){
        res.send(error.message).status(500)
    }
}

const deleteOrder = async(req, res) => {
    try{
        Order.delete({_id: req.params.id})
        res.send(`Deleted order with id ${req.params.id}`).status(200)
    } catch(error){
        res.send(error.message).status(500)
    }
}

module.exports = {
    getOrder,
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder
}
