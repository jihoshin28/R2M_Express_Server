const {sendContactEmail} = require('../email')

const createContact = async(req, res) => {
    let data = req.body.contactInfo
    console.log(data)
    sendContactEmail(data.name, data.email, data.subject, data.message)
    return res.json({'status': 'OK'}).status(200)
}

module.exports = {
    createContact
}