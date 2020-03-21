const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));


const port = process.env.PORT || 3000

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombreVariable: "Mario alejandro"

    })
});

app.get('/about', (req, res) => {
    res.render('about')
});

/*
app.get('/', (req, res) => {
    let salida = {
        nombre: 'Mario',
        edad: 32,
        ulr: req.url
    };

    res.send(salida);
    //res.send('Hello World');
});

*/
app.listen(port, () => {
    console.log(`Escuchando peticiones en ${ port }`);
})