let express = require('express')
let app = express();

let personas = [
    {id: 1, nombre: 'Kenyo'},
    {id: 2, nombre: 'Jhon'},
    {id: 3, nombre: 'Marco'}
];

app.set('view engine', 'pug');

app.get('/', (req, res) =>{
    res.render('template', {titulo:'PUG', mensaje: 'Kenyo', personas: personas})
});

app.listen(3000);