//RESOURCES 
//https://tylerkrys.ca/blog/adding-nodemailer-email-contact-form-node-express-app
const auth = require('');

// BRING IN NODEMAILER 
const nodemailer = require('nodemailer'); 

// EXPRESS AND BODYPARSER 

const express = require('express'); 
const app = express(); 

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
        from: 'kalargent@gmail.com', 
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
