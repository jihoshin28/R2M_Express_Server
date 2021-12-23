const models = require('../models')
const {sendQuoteEmail, sendQuotesRequestEmail} = require('../email')

const quoteEmailRequest = async(req, res) => {
    let quotes = await models.Quote.findAll()
    if(quotes.length === 0){
        return res.json({"status": "There are no quotes."}).status(200)
    }
    sendQuotesRequestEmail(quotes, 'allen', 'jihoshin.28@gmail.com', 'Hello', 'Whatsup')
    return
}

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
                    "message": "No quote with that id"
                }
            ]})
        } 
        res.json({"status": `Quote with id ${updatedQuote[0]} updated.`}).status(200)
    } catch(err){
        res.send(err).status(400)
    }
}

const finalizeQuote = async(req, res) => {

    try {
        const finalizedQuoteId = await models.Quote.update(req.body.quoteInfo, {
            where: {
                id: req.params.id
            }
        })

        const finalizedQuote = await models.Quote.findOne({
            where: {
                id: req.params.id
            }
        })

        const finalizedQuoteItemIds = await models.QuoteItem.findAll({
            where: {
                quote_id: req.params.id
            }
        }) 

        
        let quoteItems = {
            
        }
        
        const quoteItemArray = finalizedQuoteItemIds.map((item) => [item.dataValues.item_id, item.dataValues.quantity])
        
        for(let i = 0; i < quoteItemArray.length; i++){
            let quote_item = quoteItemArray[i]
            if(quoteItems[quote_item[0]] === undefined){
                let item = await models.Item.findOne({
                    where: {
                        id: quote_item[0]
                    }
                }) 
                quoteItems[quote_item[0]] = {
                    name: item.name,
                    quantity: quote_item[1]
                }
            } 
        }

        let quote = finalizedQuote.dataValues
        let added_items = JSON.parse(quote.added_items)
        
        let allItems = Object.assign(quoteItems, added_items)
        let start_address_details = `${quote.start_city}, ${quote.start_state} ${quote.start_zip}`
        let delivery_address_details = `${quote.delivery_city}, ${quote.delivery_state} ${quote.delivery_zip}`
    
        sendQuoteEmail(quote.name, quote.email, quote.phone, quote.start_street, start_address_details, quote.delivery_street, delivery_address_details, quote.distance, quote.move_size, quote.vehicle_size, allItems)
        
    

        if(finalizedQuoteId[0] === 0){
            throw ({'errors': [
                {
                    "type": "Null Id",
                    "message": "No quote with that id"
                }
            ]})
        } 
        res.json({"status": `Quote with id ${finalizedQuoteId[0]} updated.`}).status(200)
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
    quoteEmailRequest,
    getAllQuotes,
    getQuote,
    createQuote,
    updateQuote,
    finalizeQuote,
    deleteQuote
}