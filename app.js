require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/dbConnection');
const userRoutes = require('./routes/user');
require('./cron/birthdayChecker');

const app = express();

app.use(express.json());
app.use(require('cors')());
app.use(cors());


connectDB();

app.use('/api/users', userRoutes);
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/register.html");
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
