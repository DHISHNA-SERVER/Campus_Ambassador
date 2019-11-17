const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser = bodyParser.json();

app.set('view engine', 'ejs');
app.use(express.static('./assets'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/form', jsonParser, (req, res) => {
    console.log(req.body); // testing
    res.render('form', {user: req.body});
});

app.post('/form', urlencodedParser, (req, res) => {

});

app.listen(8000);
console.log('listening to port 8000');
