import express from 'express';
const router = express.Router();

import db from '../models';

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

router.get('/api/vendors/:id', (req, res) => {
    db.vendorData.findOne({
        where: {
            id: req.params.id
        }
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