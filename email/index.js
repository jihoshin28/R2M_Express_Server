const nodemailer = require('nodemailer')
const dotenv = require('dotenv').config()

const sendEmail = async(name, email, subject, message) => {
    console.log('email function hit')
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USERNAME,
            pass: process.env.GMAIL_PASSWORD
        }
    }); 


    let contactNotification = {
      from: "jihoshin.28@gmail.com",
      to: `${email}`,
      subject,
      html: `
      <html>
        <div style = "padding: 15px; background-color: #EEEEEE;">
          <h1>New Contact Submitted</h1>
        </div>
        <div style = "padding: 20px; background-color: #EEEEEE;">
          <h3>Contact Details</h3>
          <br></br>
          <p>Subject: ${subject}</p>
          <p>From: ${name}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>
        </div>
        <div style = "padding: 20px; background-color: #878787">
          <div >
            <div>
              <h5 style = "color: white;">
                ©2021 UpackHaulers All Rights Reserved
              </h5>
            </div>  
            <div>
              <img style = "width: 100px; height: 100px;" src = "https://production-next-images-cdn.thumbtack.com/i/415165151621914633/width/1024.jpeg"/>
            </div>
          </div>
        </div>
      </html>
      `
    }

    let contactCustomerNotification = {
      from: "jihoshin.28@gmail.com",
      to: `${email}`,
      subject,
      html: `
      <html>
        <div style = "padding: 20px; background-color: #EEEEEE;">
          <h3>We got your contact request!</h3>
          <br></br>
          <p>Hi ${name}, </p>
          <p>Thanks for taking the time to reach out to us! </p>
          <p>Your questions and concerns are very important to us and we will follow up with your request ASAP.</p>
          <br></br>
          <p>Best,</p>
          <p>UpackHaulers</p>
        </div>
        <div style = "padding: 20px; background-color: #878787">
          <div >
            <div>
              <h5 style = "color: white;">
                ©2021 UpackHaulers All Rights Reserved
              </h5>
            </div>  
            <div>
              <img style = "width: 100px; height: 100px;" src = "https://production-next-images-cdn.thumbtack.com/i/415165151621914633/width/1024.jpeg"/>
            </div>
          </div>
        </div>
      </html>
      `
    }

    // let message2 = {
    //     from: "jihoshin.28@gmail.com",
    //     to: "jihoshin.28@gmail.com",
    //     subject: "another subject",
    //     text: "another text"
    // }

    await transporter.sendMail(contactCustomerNotification, function (err, info)  {
        if (err) {
          console.log(err)
        } else {
          console.log(info)
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