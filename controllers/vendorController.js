import express from 'express';
const router = express.Router();

// import db model 

router.get('/', (req, res) => {
    // pass in home page with 
    res.render('index')
    //res.send('Hello Roe4');
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