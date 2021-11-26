const models = require('../models')
const {sendEmail} = require('../email')

const createContact = (req, res) => {
    console.log(req.body.contactInfo)
    sendEmail()
}

module.exports = {
    createContact
}