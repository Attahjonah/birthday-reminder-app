const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    },
});

const sendBirthdayEmail = (email, name) => {
    return transporter.sendMail({
        from: `"TheshopEsa" <${process.env.EMAIL}>`,
        to: email,
        subject: '🎉 Happy Birthday!',
        html: `<h2>Happy Birthday, ${name}!</h2><p>Wishing you a day filled with joy and celebration!</p>`,
    });
};

module.exports = sendBirthdayEmail;
