const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'neelchavan9@gmail.com',
        subject: 'Thank for joining',
        text: `Welcome to the app, ${name}.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'neelchavan9@gmail.com',
        subject: 'Thanks for experiencing our services',
        text: `Good bye, ${name}.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
    
}