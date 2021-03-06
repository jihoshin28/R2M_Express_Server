const nodemailer = require('nodemailer')
const dotenv = require('dotenv').config()

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD
    }
}); 

const sendContactEmail = async(name, email, subject, message) => {

    let contactNotification = {
      from: "jihoshin.28@gmail.com",
      to: "jihoshin.28@gmail.com",
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
        <br></br>
        <form action="https://intense-oasis-88289.herokuapp.com/contacts_request" method="GET">
          <div style = "padding-top: 20px">
            <button>Email me current contacts</button>
          </div>
        </form>
        <div style = "padding: 20px; background-color: #878787">
          <div>
            <div>
              <h5 style = "color: white;">
                ©2021 UpackHaulers All Rights Reserved
              </h5>
            </div> 
            <div style = "padding-bottom: 20px;">
              <a href = "https://www.upackhaulers.com">upackhaulers.com</a>
            </div> 
            <div style = "padding-bottom: 30px;>
              <a href = "https://www.upackhaulers.com/admin">Admin Panel</a>
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
            <div style = "padding-bottom: 20px;">
              <a href = "https://www.upackhaulers.com">upackhaulers.com</a>
            </div> 
            <div>
              <img style = "width: 100px; height: 100px;" src = "https://production-next-images-cdn.thumbtack.com/i/415165151621914633/width/1024.jpeg"/>
            </div>
          </div>
        </div>
      </html>
      `
    }

    await transporter.sendMail(contactNotification, function (err, info)  {
        if (err) {
          console.log(err)
        } else {
          console.log(info)
        }
    })

    await transporter.sendMail(customerContactNotification, function (err, info)  {
      if (err) {
        console.log(err)
      } else {
        console.log(info)
      }
  })

}

const sendQuoteEmail = async(name, email, phone, start_street, start_address_details, delivery_street, delivery_address_details, distance, move_size, vehicle_size, quoteItems) => {
  let renderQuoteItems = () => {
    let string = ""
    let quoteItemIds = Object.keys(quoteItems)
    for(let i = 0; i < quoteItemIds.length; i++){
      let quoteItem = quoteItems[quoteItemIds[i]]
      string += 
      `<tr>
        <td class = "description-body" colspan= "3">${quoteItem.name}</td>
        <td class = "quantity-body" colspan = "1">${quoteItem.quantity}</tdq>
      </tr>`
    }
    return string
  }
  
  const quoteNotification = {
    from: "jihoshin.28@gmail.com",
    to: "jihoshin.28@gmail.com",
    subject: "Quote Notification",
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
        <p>Phone: ${phone}</p>
        <br></br>
        <p>Quote Details: </p>
        <table style = "border: 1px solid black">
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
              ${renderQuoteItems()}
            </tbody>
        </table>
        <br></br>
        <h3>Starting Address:</h3>
        <h3>${start_street}</h3>
        <h3>${start_address_details}</h3>
        <br></br>
        <h3>Delivery Address:</h3>
        <h3>${delivery_street}</h3>
        <h3>${delivery_address_details}</h3>
        <br></br>
        <h3>Total Distance: ${distance}</h3>
        <h3>Vehicle Type: ${vehicle_size}</h3>
        <h3>Move Size: ${move_size}</h3>
        <br></br>
        <form action="https://intense-oasis-88289.herokuapp.com/quotes_request" method="GET">
          <div style = "padding-top: 20px">
            <button>Email me current quotes</button>
          </div>
        </form>
      </div>
      <div style = "padding: 20px; background-color: #878787">
        <div >
          <div>
            <h5 style = "color: white;">
              ©2021 UpackHaulers All Rights Reserved
            </h5>
          </div> 
          <div style = "padding-bottom: 20px;">
            <a href = "https://www.upackhaulers.com">upackhaulers.com</a>
          </div> 
          <div style = "padding-bottom: 30px;>
            <a href = "https://www.upackhaulers.com/admin">Admin Panel</a>
          </div> 
          <div>
            <img style = "width: 100px; height: 100px;" src = "https://production-next-images-cdn.thumbtack.com/i/415165151621914633/width/1024.jpeg"/>
          </div>
        </div>
      </div>
    </html>
    `
  }

  const customerQuoteNotification = {
    from: "jihoshin.28@gmail.com",
    to: `${email}`,
    subject: "We've received your quote!",
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
              ${renderQuoteItems()}
            </tbody>
        </table>
        <br></br>
        <h3>Starting Address:</h3>
        <h3>${start_street}</h3>
        <h3>${start_address_details}</h3>
        <br></br>
        <h3>Delivery Address:</h3>
        <h3>${delivery_street}</h3>
        <h3>${delivery_address_details}</h3>
        <br></br>
        <h3>Total Distance: ${distance}</h3>
        <h3>Vehicle Type: ${vehicle_size}</h3>
        <h3>Move Size: ${move_size}</h3>
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
          <div style = "padding-bottom: 20px;">
            <a href = "https://www.upackhaulers.com">upackhaulers.com</a>
          </div> 
          <div>
            <img style = "width: 100px; height: 100px;" src = "https://production-next-images-cdn.thumbtack.com/i/415165151621914633/width/1024.jpeg"/>
          </div>
        </div>
      </div>
    </html>
    `
  }

  await transporter.sendMail(quoteNotification, function (err, info)  {
    if (err) {
      console.log(err)
    } else {
      console.log(info)
    }
  })

  await transporter.sendMail(customerQuoteNotification, function (err, info)  {
    if (err) {
      console.log(err)
    } else {
      console.log(info)
    }
  })
}

const sendQuotesRequestEmail = async(quotes, name, email, subject, message) => {

  let renderQuotes = () => {
    let string = ""

    for(let i = 0; i < quotes.length; i++){
      let quote = quotes[i]
      string += 
      `<tr>
        <td class = "body" colspan= "1">${quote.name}</td>
        <td class = "body" colspan = "1">${quote.email}</td>
        <td class = "body" colspan = "1">${quote.phone}</td>
        <td class = "body" colspan = "1">${quote.move_size}</td>
        <td class = "body" colspan = "1">${quote.vehicle_size}</td>
        <td class = "body" colspan = "1">${quote.start_city}, ${quote.start_state} </td>
        <td class = "body" colspan = "1">${quote.delivery_city}, ${quote.delivery_state}</td>
        <td class = "body" colspan = "1">${quote.distance}</td>
      </tr>`
    }
    return string
  }
  const  quotesRequestNotification = {
    from: "jihoshin.28@gmail.com",
    to: "jihoshin.28@gmail.com",
    subject: "Current Quotes",
    html: `
    <html>
      <head>
        <style>
          .table-header {
            width: 1000px;
            background-color: black;
            color: white;
          }

          .header {
            width: 300px;
            background-color: gray;
            color: white;
            
          }

          .body {
            width: 300px;
            background-color: white;
            color: black;
            
          }
        </style>
      </head>
      <body>
        <div style = "padding: 15px; background-color: #EEEEEE;">
          <h1>Current Quotes</h1>
        </div>
        <div style = "padding: 20px; background-color: #EEEEEE;">
          <table style = "border: 1px solid black">
            <thead>
              <tr>
                  <th class = "table-header" colspan="8">Quotes List</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class = "header" colspan= "1">Name</td>
                <td class = "header" colspan= "1">Email</td>
                <td class = "header" colspan = "1">Phone</td>
                <td class = "header" colspan= "1">Move Size</td>
                <td class = "header" colspan = "1">Vehicle Size</td>
                <td class = "header" colspan = "1">Start</td>
                <td class = "header" colspan = "1">Destination</td>
                <td class = "header" colspan = "1">Distance</td>
              </tr>
              ${renderQuotes()}
            </tbody>
          </table>
        </div>
        <div style = "padding: 20px; background-color: #878787">
          <div>
            <div>
              <h5 style = "color: white;">
                ©2021 UpackHaulers All Rights Reserved
              </h5>
            </div> 
            <div style = "padding-bottom: 20px;">
              <a href = "https://www.upackhaulers.com">upackhaulers.com</a>
            </div> 
            <div style = "padding-bottom: 30px;>
              <a href = "https://www.upackhaulers.com/admin">Admin Panel</a>
            </div> 
            <div>
              <img style = "width: 100px; height: 100px;" src = "https://production-next-images-cdn.thumbtack.com/i/415165151621914633/width/1024.jpeg"/>
            </div>
          </div>
        </div>
      </body>
      
    </html>
    `
  }
  console.log(transporter)
  await transporter.sendMail(quotesRequestNotification, function (err, info)  {
      if (err) {
        console.log(err)
      } else {
        console.log(info)
      }
  })
}

module.exports = {
    sendContactEmail,
    sendQuoteEmail,
    sendQuotesRequestEmail
}