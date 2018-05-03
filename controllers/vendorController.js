import express from 'express';
const router = express.Router();

import db from '../models';

router.get('/api/vendors', (req, res) => {
    db.Vendor.findAll({}).then(result => res.json(result));
});

router.get('/api/vendors/:id', (req, res) => {
    db.Vendor.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(result => res.json(result));
});

router.get('/api/city/:city', (req, res) => {
    db.Vendor.findAll({
        where: {
            city: req.params.city
        }
    })
        .then(result => res.json(result));
});

router.get('/api/users', (req, res) => {
    db.Users.findAll({}).then(result => res.json(result));
});

// router.post('/api/vendors', (req, res) => {
//     // call model to create data => callback to display json result
//     res.json({ "json": "object" });
// });

// router.put('/api/vendors/:id', (req, res) => {
//     call model to update data => callback to send res.status
// });

// delete route

export default router;



// Send grid
// require("dotenv").config();

// var keys = require('../keys.js');
// const sgMail = require('@sendgrid/mail');
// console.log('This is the key(should be undefined): ' +keys.apiKey);
// sgMail.setApiKey(keys.apiKey);

// const msg = {
//     to: 'mnolen5670@gmail.com',
//     from: 'test@example.com',
//     subject: 'Sending with SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg).then(() => {
//     Celebrate
// })
//     .catch(error => {

//         //Log friendly error
//         console.error(error.toString());

//         //Extract error msg
//         const { message, code, response } = error;

//         //Extract response msg
//         const { headers, body } = response;
//     });;