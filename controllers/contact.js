const {sendEmail} = require('../email')

const createContact = async(req, res) => {
    let data = req.body.contactInfo
    sendEmail(data.name, data.email, data.subject, data.text)
    

}

module.exports = {
    createContact
}