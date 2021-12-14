const models = require('../models')

const getAllQuoteItemsByQuote = async(req, res) => {
    let quoteItems = await models.QuoteItem.findAll({
        where: {
            quote_id: req.body.quoteItemId
        }
    })
    if(quoteItems.length === 0){
        return res.json({"status": "There are no quote items."}).status(200)
    }
    return res.json(quoteItems).status(200)
}

const createQuoteItem = async(req, res) => {
    const newQuoteItem = await models.QuoteItem.create(req.body.quoteItemInfo)
    // need to add validator logic
    console.log(newQuoteItem)
    res.json(newQuoteItem).status(200)
}

const updateQuoteItem = async(req, res) => {
    const updatedQuoteItem = await models.QuoteItem.update(req.body.quoteItemInfo)
    console.log(updatedQuoteItem)
    res.json(updatedQuoteItem).status(200)
}

const deleteQuoteItem = async(req, res) => {
    // await models.QuoteItem.destroy(req.params.id)
}

module.exports = {
    getAllQuoteItemsByQuote,
    createQuoteItem,
    updateQuoteItem,
    deleteQuoteItem
}