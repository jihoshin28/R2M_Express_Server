const models = require('../models')

const getAllQuotes = async(req, res) => {
    let quotes = await models.Quote.findAll()
    if(quotes.length === 0){
        return res.json({"status": "There are no quotes."}).status(200)
    }
    return res.json(quotes).status(200)
}

const getQuote = async(req, res) => {
    console.log(req.params.id)
    let quote = await models.Quote.findOne({
        where: {
            id: req.params.id
        }
    })

    if(!quote){
        return res.json({"error": "Quote not found"}).status(200)
    } else {
        return res.json(quote).status(200)
    }

}

const createQuote = async(req, res) => {
    console.log(req.body.quoteInfo)
    try {
        const newQuote = await models.Quote.create(req.body.quoteInfo)
        res.send(newQuote).status(200)
    } catch(err) {
        res.send(err).status(500)
    }
    // need to add validator logic
    // res.json(newQuote).status(200)
}

const updateQuote = async(req, res) => {
    const updatedQuote = await models.Quote.update(req.body.quoteInfo)
    console.log(updatedQuote)
    res.json(updatedQuote).status(200)
}

const deleteQuote = async(req, res) => {
    // await models.Quote.destroy(req.params.id)
}

module.exports = {
    getAllQuotes,
    getQuote,
    createQuote,
    updateQuote,
    deleteQuote
}