const Customer = require('../models/customer')

const getCustomer = async(req, res) => {
    console.log(req)
    await Customer.find({_id: req.params.id}, (err, customer) => {
        if(err) {
            return res.send(err).status(500)
        }
        res.json(customer).status(200)
    })
}

const createCustomer = async(req, res) => {
    try{
        let data = req.body
        res.header('Content-Type', 'application/json')
        const newCustomer = new Customer({
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            phone: data.phone,
            orders: [],
            contacts: []
        })
        newCustomer.save((err) => {
            if(err) throw err
        }) 

        res.json({newCustomer}).status(200)
    } catch(error){
        res.send(error.message).status(500)
    }
}

const updateCustomer = async(req, res) => {
    try{
        const customer = Customer.find({_id: req.params.id})
        let updatedKeys = Object.keys(req.body)

        for(let i = 0; i < updatedKeys.length; i++){
            customer[updatedKeys[i]] = req.body[updatedKeys[i]]
        }

        customer.save((err) => {
            if(err) throw err
        }) 
        res.send(`Updated customer with id ${req.params.id}.`).status(200)
    } catch(error){
        res.send(error.message).status(500)
    }
}

const deleteCustomer = async(req, res) => {
    try{
        Customer.delete({_id: req.params.id})
        res.send(`Deleted customer with id ${req.params.id}`).status(200)
    } catch(error){
        res.send(error.message).status(500)
    }
}

module.exports = {
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer
}
