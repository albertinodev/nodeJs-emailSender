const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'MAYBE_MAIL.YOURDOMAIN.COM',
    port: 'SMTP_PORT',
    secure: false,
    auth: {
        user: 'USER@EMAIL.COM',
        pass: 'EMAI_PASSWORD'
    },
    tls: {
        rejectUnauthorized: false
    }
});
const mailOptions = {
    from: 'USER@EMAIL.COM',
    to: 'RECEIVER',
    subject: 'SENDING EMAIL WITH NodeJs',
    html: '<div style="text-align: center; background-color:brown;color: white;padding:5% 2%;"><h1> Seja bem vindo</h1><a href="www.caf3.co" style="display:inline-block;padding:5%; background-color:skyblue; text-decoration: none;color:white;text-transform:uppercase;">Click here to continue</a></div> '
};
transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
        console.log(err);
    } else {
        console.log(`Email sent successfully: ${info.response}`)
    }
})
/**
 * github : @caf-3
 * email: tomascaetano@caf3.co
 */