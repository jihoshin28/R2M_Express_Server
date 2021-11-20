const Review = require('../models/review')

const getCustomerCards = async(req, res) => {
    console.log(req.params, req.body)
    await Card.find({customer_id: req.params.customer_id}, (err, customers) => {
        if(err) {
            return res.send(err).status(500)
        }
        res.json(customers).status(200)
    })
}


const createCard = async(req, res) => {
    try{
        res.header('Content-Type', 'application/json')
        let data = req.body
        const newCard = new Card({
            number: data.number,
            date: data.date,
            cvc: data.cvc,
            customer_id: data.customer_id
        })
        newCard.save((err) => {
            if(err) throw err
        }) 
        
        res.json({newCard}).status(200)
    } catch(error){
        res.send(error.message).status(500)
    }
}

const updateCard = async(req, res) => {
    try{
        const card = Card.find({_id: req.params.id})

        card.save((err) => {
            if(err) throw err
        }) 

        res.send(`Updated card with id ${req.body.user_id}.`).status(200)
    } catch(error){
        res.send(error.message).status(500)
    }
}


const deleteCard = async(req, res) => {
    try{
        Card.delete({_id: req.params.id})

        res.send(`Deleted card with id ${req.params.id}`).status(200)
    } catch(error){
        res.send(error.message).status(500)
    }
}

module.exports = {
    getCustomerCards,
    createCard,
    updateCard,
    deleteCard
}
