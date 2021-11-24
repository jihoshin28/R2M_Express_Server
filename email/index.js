const nodemailer = require('nodemailer')

const sendEmail = () => {
    let options = {
        pool: true,
        host: "smtp.example.com",
        port: 465,
        secure: true, // use TLS
        auth: {
            user: "username",
            pass: "password",
        },
    }
    let transporter = nodemailer.createTransport(options)
}

module.exports = {
    sendEmail
}