const models = require('../models')

const getAllQuoteItemsByQuote = async(req, res) => {
    console.log(req.params.id)
    await models.QuoteItem.findAll({ where: {quote_id: req.params.quote_id}}, (err, quoteItems) => {
        if(err) {
            return res.send(err).status(500)
        }
        res.json(quoteItems).status(200)
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
    getAllQuoteItemsByQuote,
    createQuoteItem,
    updateQuoteItem,
    deleteQuoteItem
}