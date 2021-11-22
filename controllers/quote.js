const models = require('../models')

const getAllQuotes = async(req, res) => {
    console.log(req.params.id)
    await models.Quote.findAll({}, (err, quotes) => {
        if(err) {
            return res.send(err).status(500)
        }
        res.json(quotes).status(200)
    })
}

const getQuote = async(req, res) => {
    console.log(req.params.id)
    await models.Quote.findOne({_id: req.params.id}, (err, quote) => {
        if(err) {
            return res.send(err).status(500)
        }
        res.json(quote).status(200)
    })
}

const createQuote = async(req, res) => {
    console.log(req.body.quoteInfo)
    await models.Quote.create(req.body.QuoteInfo, (err, newQuote) => {
        if(err){
            return res.send(err).status(500)
        }
        res.json(newQuote).status(200)
    })
}

const updateQuote = async(req, res) => {
    await models.Quote.update(req.body.QuoteInfo, (err, updatedQuote) => {
        if(err){
            return res.send(err).status(500)
        }
        res.json(updatedQuote).status(200)
    })
}

const deleteQuote = async(req, res) => {
    await models.Quote.delete(req.body.QuoteInfo, (err, deletedQuote) => {
        if(err){
            return res.send(err).status(500)
        }
        res.json(deletedQuote).status(200)
    })
}

module.exports = {
    getAllQuotes,
    getQuote,
    createQuote,
    updateQuote,
    deleteQuote
}