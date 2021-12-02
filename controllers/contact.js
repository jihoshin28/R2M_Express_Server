const {sendEmail} = require('../email')

const createContact = async(req, res) => {
    let data = req.body.contactInfo
    let email = await sendEmail(data.name, data.email, data.subject, data.text)
    console.log(email)
    // if(email.status === 'error'){
    //     res.send(email.err).status(400)
    // } else if(emailStatus === 'accepted'){
    //     res.send(email.info).status(200)
    // }

}

module.exports = {
    createContact
}