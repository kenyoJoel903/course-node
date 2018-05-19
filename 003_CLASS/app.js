const mi = require('./kenyo.js');
mi.saludar();
let resp = mi.sumar(5,6);
let resp1 = mi.mostrar(15);
console.log(resp);
console.log(resp1);

setTimeout(() => {
    console.log("terminee...");
}, 2000);