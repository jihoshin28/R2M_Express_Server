const models = require('../models')

const getAllQuotes= async(req, res) => {
    console.log(req.params.id)
    models.Quote.findAll({}, (err, quotes) => {
        if(err) {
            return res.send(err).status(500)
        }
        res.json(quotes).status(200)
    })
}

const getQuote= async(req, res) => {
    console.log(req.params.id)
    models.Quote.find({_id: req.params.id}, (err, quote) => {
        if(err) {
            return res.send(err).status(500)
        }
        res.json(quote).status(200)
    })
}

const createQuote = async(req, res) => {
    try{
        res.header('Content-Type', 'application/json')
        const newQuote = await models.Quote.create(req.body.quoteInfo)
        newQuote.save((err) => {
            if(err) throw err
        }) 
        
        res.json(newQuote).status(200)
    } catch(error){
        res.send(error.message).status(500)
    }
}

const updateQuote = async(req, res) => {
    try{
        const quote = Quote.find({_id: req.params.id})
 
        quote.save((err) => {
            if(err) throw err
        }) 
        res.send(`Removed user with user id ${req.body.user_id} from chat.`).status(200)
    } catch(error){
        res.send(error.message).status(500)
    }
}

const deleteQuote = async(req, res) => {
    try{
        Quote.delete({_id: req.params.id})
        res.send(`Deleted contact with id ${req.params.id}`).status(200)
    } catch(error){
        res.send(error.message).status(500)
    }
}

module.exports = {
    getAllQuotes,
    getQuote,
    createQuote,
    updateQuote,
    deleteQuote
}