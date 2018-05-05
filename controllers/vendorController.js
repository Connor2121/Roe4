import express from 'express';

// ----------Firebase Server-side----------------------
// this may be moved at a later date
// import firebase from 'firebase';
// require('firebase/auth');
// require('firebase/database');
// const config = {
//     apiKey: "AIzaSyCpN-SRkG3HrYkJgClTHwJKu6k4_KYx4So",
//     authDomain: "nc-vfm.firebaseapp.com",
//     databaseURL: "https://nc-vfm.firebaseio.com",
//     projectId: "nc-vfm",
//     storageBucket: "nc-vfm.appspot.com",
//     messagingSenderId: "987355521805"
// };
// firebase.initializeApp(config);
// ----------Firebase Server-side----------------------

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

// ---------Sign UP Form Post Route ------------------
router.post('/api/signup', (req, res) => {
    // db.TABLENAME.create ??
    // right now this just console logs server side
    // console log = the form values from signup page
    let placeholder = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        pass: req.body.pass
    };
    console.log(placeholder);
});

// --------FarmerEdit adds livestock to Vendor in DB
router.post('/api/vendorEdit/Livestock', (req, res) => {
    let placeholder = {
        UID: req.body.uid,
        Livestock: req.body.livestock
    };
    console.log(placeholder);
    // we want to Create a row in vendorlivestocks with vendorDatumId and LivestockID
});

// --------FarmerEdit adds crops to Vendor in DB
router.post('/api/vendorEdit/Crop', (req, res) => {
    let placeholder = {
        UID: req.body.uid,
        Crop: req.body.crop
    };
    console.log(placeholder);
    // we want to Create a row in vendorcrops with vendorDatumId and cropDatumId
});

// --------FarmerEdit page updates DB with vendor information
router.post('/api/vendorEdit', (req, res) => {
    let placeholder = {
        UID: req.body.uid,
        Bio: req.body.bio,
        Vendor: req.body.vendorName,
        Phone: req.body.phoneNum,
        Email: req.body.email,
        Address: req.body.address,
        City: req.body.city,
        State: req.body.state,
        Zip: req.body.zip
    }
    db.vendorData.update({
        Vendor: req.body.vendorName,
        Bio: req.body.bio,
        Phone: req.body.phoneNum,
        Email: req.body.email,
        Address: req.body.address,
        City: req.body.city,
        State: req.body.state,
        Zip: req.body.zip
    }, {
    where: {
        UID: req.body.uid
    }
    })
    console.log(placeholder);
});

router.get('/api/vendors', (req, res) => {
    db.vendorData.findAll({
        include: [{
            model: db.cropData           
        },
        {
            model: db.Livestock
        }]
    })
    .then(result => res.json(result));
});

router.get('/api/crops/:Name', (req, res) => {
    db.cropData.findAll({
        include: [{
            model: db.vendorData
        }],
        where: {
            Name: req.params.Name
        }
    })
    .then(result => res.json(result));
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
    })
    .then(result => res.json(result));
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
    })
    .then(result => res.json(result));
});

router.get('/api/livestock/:Name', (req, res) => {
    db.Livestock.findAll({
        include: [{
            model: db.vendorData
        }],
        where: {
            Name: req.params.Name
        }
    })
    .then(result => res.json(result));
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




