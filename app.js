const express = require('express');
const app = express();
const trackerRoutes = require('./routes/trackerRoutes');
const seedDB = require('./seed');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');

app.get('/', (req, res) => {
    res.send('use /tracker to acess tracker');
});

const sgMail = require('@sendgrid/mail');
const API_KEY = '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';
sgMail.setApiKey(API_KEY);

const message = {
    to: 'manandharsaksham@gmail.com',
    from: 'google@gmail.com',
    subject: 'working',
    text: 'Hello from google',
    html: '<h1>hello world</h1>',
};

sgMail.send(message)
    .then(response => console.log('Email sent successfully'))
    .catch(err => console.log(err.message));
mongoose.connect('mongodb://localhost:27017/tracker-db')
    .then(() => {
        console.log('DB Connected');
    })
    .catch((err) => {
        console.log(err);
    });

seedDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));



app.use(trackerRoutes);

app.listen(3000, (req, res) => {
    console.log("Server Started At Port 3000");
});