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

// router.post('/api/vendors', (req, res) => {
//     // call model to create data => callback to display json result
//     res.json({ "json": "object" });
// });

// router.put('/api/vendors/:id', (req, res) => {
//     call model to update data => callback to send res.status
// });

// delete route

export default router;