const {sendQuotesRequestEmail} = require('./index')
const models = require('../models')

const getAllQuotes = async(req, res) => {
    let quotes = await models.Quote.findAll()
    if(quotes.length === 0){
        return res.json({"status": "There are no quotes."}).status(200)
    }
    let quotesResponse = quotes.map((quote) => {
        return quote.dataValues 
    })
    sendQuotesRequestEmail(quotesResponse, 'allen', 'jihoshin.28@gmail.com', 'Hello', 'Whatsup')
}

getAllQuotes()