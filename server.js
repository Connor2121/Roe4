import express from 'express';
// import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.json());

// import exphbs from 'express-handlebars';

// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

// const router = require('./controllers/vendorController.js');
import router from './controllers/vendorController.js';

app.use(router);

app.listen(PORT, () => console.log('App now listening at localhost: ', PORT));