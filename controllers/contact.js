const {sendContactEmail} = require('../email')

const createContact = async(req, res) => {
    let data = req.body.contactInfo
    console.log(data)
    sendContactEmail(data.name, data.email, data.subject, data.message)
}

module.exports = {
    createContact
}