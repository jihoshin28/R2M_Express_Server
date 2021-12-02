const nodemailer = require('nodemailer')
const dotenv = require('dotenv').config()

const sendEmail = async(name, email, subject, text) => {
    console.log('email function hit')
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USERNAME,
            pass: process.env.GMAIL_PASSWORD
        }
    }); 


    let message1 = {
        from: "jihoshin.28@gmail.com",
        to: 'geeuho@gmail.com',
        subject,
        text
    }    

    // let message2 = {
    //     from: "jihoshin.28@gmail.com",
    //     to: "jihoshin.28@gmail.com",
    //     subject: "another subject",
    //     text: "another text"
    // }

    await transporter.sendMail(message1, function (err, info)  {
        if (err) {
          return callback(err)
        } else {
          return callback(info)
        }
    })

    // transporter.sendMail(message2, function (err, info)  {
    //     if (err) {
    //       console.log(err)
    //     } else {
    //       console.log('Email was sent', info);
    //     }
    // })

}

module.exports = {
    sendEmail
}