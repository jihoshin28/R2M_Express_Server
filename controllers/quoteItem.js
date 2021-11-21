const models = require('../models')

const getAllQuoteItems = async(req, res) => {
    console.log(req.params.id)
    await models.QuoteItem.findAll({}, (err, quoteItems) => {
        if(err) {
            return res.send(err).status(500)
        }
        res.json(quoteItems).status(200)
    })
}

const getQuoteItem = async(req, res) => {
    console.log(req.params.id)
    await models.QuoteItem.find({_id: req.params.id}, (err, quoteItem) => {
        if(err) {
            return res.send(err).status(500)
        }
        res.json(quoteItem).status(200)
    })
}

const createQuoteItem = async(req, res) => {
    await models.QuoteItem.create(req.body.QuoteItemInfo, (err, newQuoteItem) => {
        if(err){
            return res.send(err).status(500)
        }
        res.json(newQuoteItem).status(200)
    })
}

const updateQuoteItem = async(req, res) => {
    await models.QuoteItem.update(req.body.QuoteItemInfo, (err, updatedQuoteItem) => {
        if(err){
            return res.send(err).status(500)
        }
        res.json(updatedQuoteItem).status(200)
    })
}

const deleteQuoteItem = async(req, res) => {
    await models.QuoteItem.delete(req.body.QuoteItemInfo, (err, deletedQuoteItem) => {
        if(err){
            return res.send(err).status(500)
        }
        res.json(deletedQuoteItem).status(200)
    })
}

module.exports = {
    getAllQuoteItemsForQuote,
    createQuoteItem,
    updateQuoteItem,
    deleteQuoteItem
}