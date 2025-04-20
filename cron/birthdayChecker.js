const cron = require('node-cron');
const User = require('../models/user');
const sendBirthdayEmail = require('../utils/sendMail');

cron.schedule('0 6 * * *', async () => {

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;

    const users = await User.find();
    users.forEach(user => {
        const dob = new Date(user.dob);
        if (dob.getDate() === day && (dob.getMonth() + 1) === month) {
            sendBirthdayEmail(user.email, user.username);
        }
    });

    console.log('Birthday check ran at 6 AM');
});
