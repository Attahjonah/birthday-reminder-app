# 🎂 Birthday Reminder App

A simple Node.js web application that allows users to submit their **username**, **email**, and **date of birth**. Every day at **7:00 AM**, a cron job checks for users whose birthday is today and sends them a **birthday wish email** using **Gmail via Nodemailer**.

---

## 🚀 Features

- Simple UI form to collect:
  - Username
  - Email address
  - Date of birth
- Stores user details in MongoDB.
- Daily automated job (via `node-cron`) that:
  - Runs at 7:00 AM every day.
  - Checks for birthdays matching today's date.
  - Sends customized **Happy Birthday** emails via Gmail using **Nodemailer**.

---

## 📦 Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: HTML + CSS (basic)
- **Database**: MongoDB
- **Email Service**: Gmail SMTP via Nodemailer
- **Scheduler**: node-cron

---

## 📂 Project Structure

birthday-reminder-app/
│
├── 📁 config/
│   └── dbConnection.js            # MongoDB connection logic
│
├── 📁 cron/
│   └── birthdayChecker.js         # Cron job that runs daily at 7am to check and send birthday emails
│
├── 📁 models/
│   └── user.js                    # Mongoose model for User (username, email, dob)
│
├── 📁 public/
│   ├── register.html              # Frontend form for user input
│   └── thankYou.html              # Page shown after successful registration
│
├── 📁 routes/
│   └── user.js                    # Express route to handle user form submission
│
├── 📁 utils/
│   └── sendMail.js                # Email sending logic using Nodemailer (Gmail)
│
├── .env                           # Environment variables (Mongo URI, Gmail credentials)
├── app.js                         # Main Express app (sets up routes, middleware, static folder)
├── server.js                      # Server entry point (starts Express server, initializes cron)
├── package.json                   # Project metadata and dependencies
└── README.md                      # Project documentation
