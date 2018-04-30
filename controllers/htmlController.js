import express from 'express';
const router = express.Router();

import db from '../models';

router.get('/', (req, res) => {
    // pass in home page with 
    res.render('index')
});

router.get('/buyer', (req, res) => {
    // pass in home page with 
    res.render('buyerProfile');
});

router.get('/vendor', (req, res) => {
    // pass in home page with 
    res.render('farmerProf');
});

router.get('/buyer/search', (req, res) => {
    // pass in home page with 
    res.render('buyerSearch');
});

export default router;