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
          <h1>New Contact Request Submitted</h1>
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

    let customerContactNotification = {
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

    let quoteNotification = {
      from: "jihoshin.28@gmail.com",
      to: `${email}`,
      subject,
      html: `
      <html>
        <head>
          <style>
            .table-header {
              width: 1000px;
              background-color: black;
              color: white;
            }

            .description-header {
              width: 700px;
              background-color: gray;
              color: white;
              
            }

            .quantity-header {
              width: 300px;
              background-color: gray;
              color: white;
              
            }

            .description-body {
              width: 700px;
              background-color: white;
              color: black;
              
            }

            .quantity-body {
              width: 300px;
              background-color: white;
              color: black;
              
            }
          </style>
        </head>
        <div style = "padding: 20px; background-color: #EEEEEE;">
          <h1>New Quote Request Submitted!</h1>
          <br></br>
          <p>From: ${name}</p>
          <p>Email: ${email}</p>
          <p>Phone: (510)789-9938</p>
          <br></br>
          <p>Quote Details: </p>
          <tablen style = "border: 1px solid black">
              <thead>
                <tr>
                    <th class = "table-header" colspan="4">Items List</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td class = "description-header" colspan= "3">Description</td>
                    <td class = "quantity-header" colspan = "1">Quantity</td>
                </tr>
                <tr>
                    <td class = "description-body" colspan= "3">Some Item Description #1</td>
                    <td class = "quantity-body" colspan = "1">3</td>
                </tr>
                <tr>
                    <td class = "description-body" colspan= "3">Some Item Description #2</td>
                    <td class = "quantity-body" colspan = "1">2</td>
                </tr>
                <tr>
                    <td class = "description-body" colspan= "3">Some Item Description #3</td>
                    <td class = "quantity-body" colspan = "1">1</td>
                </tr>
              </tbody>
          </table>
          <br></br>
          <h3>Starting Address:</h3>
          <h3>5600 Pacific Grove Way </h3>
          <h3>Union City, CA 94587</h3>
          <br></br>
          <h3>Delivery Address:</h3>
          <h3>34341 Eucalyptus Terrace</h3>
          <h3>Fremont, CA 94555</h3>
          <br></br>
          <h3>Total Distance: 10 miles</h3>
          <h3>Vehicle Type: Truck</h3>
          <h3>Move Size: 2 bedroom</h3>
          <br></br>
          <h1>Initial Estimate: $540.35</h1> 
          <br></br>
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

    let customerQuoteNotification = {
      from: "jihoshin.28@gmail.com",
      to: `${email}`,
      subject,
      html: `
      <html>
        <head>
          <style>
            .table-header {
              width: 1000px;
              background-color: black;
              color: white;
            }

            .description-header {
              width: 700px;
              background-color: gray;
              color: white;
              
            }

            .quantity-header {
              width: 300px;
              background-color: gray;
              color: white;
              
            }

            .description-body {
              width: 700px;
              background-color: white;
              color: black;
              
            }

            .quantity-body {
              width: 300px;
              background-color: white;
              color: black;
              
            }
          </style>
        </head>
        <div style = "padding: 20px; background-color: #EEEEEE;">
          <h1>We got your quote request!</h1>
          <br></br>
          <p>Hi ${name}, </p>
          <br></br>
          <p>Here are the details for the quote you requested: </p>
          <tablen style = "border: 1px solid black">
              <thead>
                <tr>
                    <th class = "table-header" colspan="4">Items List</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td class = "description-header" colspan= "3">Description</td>
                    <td class = "quantity-header" colspan = "1">Quantity</td>
                </tr>
                <tr>
                    <td class = "description-body" colspan= "3">Some Item Description #1</td>
                    <td class = "quantity-body" colspan = "1">3</td>
                </tr>
                <tr>
                    <td class = "description-body" colspan= "3">Some Item Description #2</td>
                    <td class = "quantity-body" colspan = "1">2</td>
                </tr>
                <tr>
                    <td class = "description-body" colspan= "3">Some Item Description #3</td>
                    <td class = "quantity-body" colspan = "1">1</td>
                </tr>
              </tbody>
          </table>
          <br></br>
          <h3>Starting Address:</h3>
          <h3>5600 Pacific Grove Way </h3>
          <h3>Union City, CA 94587</h3>
          <br></br>
          <h3>Delivery Address:</h3>
          <h3>34341 Eucalyptus Terrace</h3>
          <h3>Fremont, CA 94555</h3>
          <br></br>
          <h3>Total Distance: 10 miles</h3>
          <h3>Vehicle Type: Truck</h3>
          <h3>Move Size: 2 bedroom</h3>
          <br></br>
          <h1>Initial Estimate: $540.35</h1> 
          <br></br>
          <p>This is a rough estimate and one of our correspondants will follow up with you on your quote request with more details ASAP.</p>
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

    await transporter.sendMail(quoteNotification, function (err, info)  {
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