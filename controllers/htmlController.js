import express from 'express';
const router = express.Router();

import db from '../models';

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/buyer', (req, res) => {
    res.render('buyerProfile');
});

router.get('/vendor', (req, res) => {
    res.render('farmerProf');
});

router.get('/vendor/manageproducts', (req, res) => {
    res.render('farmerEdit');
});

router.get('/buyer/search', (req, res) => {
    res.render('buyerSearch');
});
router.get('/buyer/search/:vendorName', (req, res) => {
    db.vendorData.findAll({
        where: {
            Vendor: req.params.vendorName
        } 
    })
    .then(function (result) {
        res.render('partials/card', {vendor: result});
    })
   
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/henderson', (req, res) => {
    res.render('hendersonProf');
});

router.get('/infused', (req, res) => {
    res.render('infusedProf');
});

router.get('/johnson', (req, res) => {
    res.render('johnsonProf');
});

export default router;