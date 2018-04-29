import express from 'express';
const router = express.Router();

import db from '../models';

router.get('/', (req, res) => {
    // pass in home page with 
    res.render('index')
});

export default router;