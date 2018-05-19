let express = require('express')
let app = express();

let isLogin = () => true;

let logger = ((req, res, next)=>{
    console.log("Peticion de tipo: "+ req.method);
    next();
});


let showIP= ((req, res, next)=>{
    console.log("IP 127.0.0.1");
    next();
});

//middleware
app.use((req, res, next)=>{
    if(isLogin()){
        next();
    }else{
        res.send('No estas logeado');
    }
}, logger, showIP);

//app.use(logger);

app.get('/:user', function (req, res) {
    let usuario = req.params.user;
    res.send(`Hello World ${usuario}`)
});

app.post('/', function (req, res) {
    res.send('Hello World')
});

app.put('/', function (req, res) {
    res.send('Hello World')
});

app.delete('/', function (req, res) {
    res.send('Hello World')
});
   
  app.listen(3000)