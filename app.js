const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

//import db connection pool
const dbConnPool = require('./util/database');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

/* dbConnPool.execute('SELECT * from products')
    .then(result => {
        console.log('res==>', result);
    })
    .catch(error => {
        console.log('error==>', error);
    });  Now it not required here */

app.listen(3000);
