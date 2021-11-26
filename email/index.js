const nodemailer = require('nodemailer')

const sendEmail = async() => {
    console.log('email function hit')
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: true, // upgrade later with STARTTLS
        auth: {
          user: "geeuho",
          pass: "Jeeho-123",
        },
    }); 


    let message = {
        from: "geeuho@gmail.com",
        to: "geeuho@gmail.com",
        subject: "Subject",
        text: "Hello SMTP Email"
    }    
    transporter.sendMail(message, function (err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
        }
    })
}

module.exports = {
    sendEmail
}