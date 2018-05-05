import express from 'express';
const router = express.Router();

import db from '../models';

// Send grid
const sgMail = require('@sendgrid/mail');

router.post('/api/mail', (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
        to: 'mnolen5670@gmail.com',
        from: req.body.fromEmail,
        subject: req.body.subject,
        text: req.body.message,
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg).then(() => {
        console.log(msg);
        res.send("Email sent!");
    })
    .catch(error => {

        //Log friendly error
        console.error(error.toString());

        //Extract error msg
        const { message, code, response } = error;

        //Extract response msg
        const { headers, body } = response;
    });;
});

router.get('/api/vendors', (req, res) => {
    db.vendorData.findAll({
        include: [{
            model: db.cropData           
        },
        {
            model: db.Livestock
        }]
    }).then(result => res.json(result));
});

router.get('/api/crops/:Name', (req, res) => {
    db.cropData.findAll({
        include: [{
            model: db.vendorData
        }],
        where: {
            Name: req.params.Name
        }
    }).then(result => res.json(result));
});


router.get('/api/vendors/:vendorName', (req, res) => {
    db.vendorData.findAll({
        where: {
            Vendor: req.params.vendorName
        }
    })
    .then(result => res.json(result));
    //.then(result => res.render('buyerSearch', {venName: result}));
});

router.get('/api/vendors/id/:id', (req, res) => {
    db.vendorData.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            model: db.cropData           
        },
        {
            model: db.Livestock
        }]
    })
        .then(result => res.json(result));
});

router.get('/api/city/:city', (req, res) => {
    db.vendorData.findAll({
        where: {
            city: req.params.city
        }
    })
        .then(result => res.json(result));
});

router.get('/api/crops', (req, res) => {
    db.cropData.findAll({
        include: [{
            model: db.vendorData
        }]
    }).then(result => res.json(result));
});

router.get('/api/crops/:Name', (req, res) => {
    db.cropData.findAll({
        where: {
            Name: req.params.Name
        }
    })
    .then(result => res.json(result));
});

router.get('/api/livestock', (req, res) => {
    db.Livestock.findAll({
        include: [{
            model: db.vendorData
        }]
    }).then(result => res.json(result));
})

// router.post('/api/vendors', (req, res) => {
//     // call model to create data => callback to display json result
//     res.json({ "json": "object" });
// });

// router.put('/api/vendors/:id', (req, res) => {
//     call model to update data => callback to send res.status
// });

// delete route

export default router;




