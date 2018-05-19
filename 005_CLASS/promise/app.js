let prom = require('./promesa.js');

prom.calcular(2,4).then(resultado=>{
    console.log(resultado);
});

let promesa = new Promise((resolve, reject)=>{
    //resolve('Exito al procesar los datos');
    reject('Existe un error');
});

promesa.then(resultado =>{
    console.log(resultado);
}).catch(error =>{
    console.log(error);
});