//RESOURCES 
//https://tylerkrys.ca/blog/adding-nodemailer-email-contact-form-node-express-app


let GMAIL_USER = process.env.GMAIL_USER
let GMAIL_PASS = process.env.GMAIL_PASS

if (GMAIL_USER === undefined) { 
    console.log("no username"); 
    process.exit(); 
}



// BRING IN NODEMAILER 
const nodemailer = require('nodemailer'); 

// EXPRESS AND BODYPARSER 

const express = require('express'); 
const app = express(); 

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    // app.use('/static', express.static(path.join(__dirname, 'client/build')));
  }

const bodyparser = require('body-parser');  
app.use(bodyparser.urlencoded( {extended:true} )); 

// POST METHOD 
app.post('/contact', (req, res) => {
    // SMTP CONFIG
    const smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com', 
        port: 465, 
        secure: true, 
        auth: {
            user: GMAIL_USER, 
            pass: GMAIL_PASS
        }
    })

    // EMAIL FORMAT 
    const MailOpts = {
        from: GMAIL_USER, 
        to: GMAIL_USER, 
        subject: 'New Message from karenlargent.com', 
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    }

    // SEND THE MAIL 
    smtpTrans.sendMail(MailOpts, (err, res) => {
        if (err) { 
            alert("Your email failed to send. Please try again.")
        }
        else {
            alert("Thanks for contacting me! I'll answer your mail shortly!")
        }
    })
})
