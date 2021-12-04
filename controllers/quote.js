const models = require('../models')
const {sendQuoteEmail} = require('../email')

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
        res.send(err).status(400)
    }
    // need to add validator logic
    // res.json(newQuote).status(200)
}

const updateQuote = async(req, res) => {
    try {
        const updatedQuote = await models.Quote.update(req.body.quoteInfo, {
            where: {
                id: req.params.id
            }
        })

        if(updatedQuote[0] === 0){
            throw ({'errors': [
                {
                    "type": "Null Id",
                    "message": "No Id with that name"
                }
            ]})
        } 
        res.json({"status": `Quote with id ${updatedQuote[0]} updated.`}).status(200)
    } catch(err){
        res.send(err).status(400)
    }
}

const deleteQuote = async(req, res) => {
    try {
        const deletedQuoteId = await models.Quote.destroy({
            where: {
              id: req.params.id
            }
        });

        if(deletedQuoteId === 0){
            throw ({'errors': [
                {
                    "type": "Null Id",
                    "message": "No Id with that name"
                }
            ]})
        } 
        res.json({"status": `Quote with id ${deletedQuoteId} deleted.`})
    } catch (err){
        res.send(err).status(400)
    }

}

module.exports = {
    getAllQuotes,
    getQuote,
    createQuote,
    updateQuote,
    deleteQuote
}