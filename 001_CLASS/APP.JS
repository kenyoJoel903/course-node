//MODULOS Y REQUIRE
const os = require('os');
const fs = require('fs');
let cpu = os.cpus();
let sistemaOperativo = os.platform();
let usuario = os.hostname();
console.log("CPU",cpu);
console.log("Sistema operativo", sistemaOperativo);
console.log("Usuario", usuario);

fs.appendFile('kenyo.txt','contenido archivo', error =>{
    console.log("Error al crar archivo", error);
});

let cpu_string = JSON.stringify(cpu)

fs.appendFile('mipc.txt',`Informacion del CPU : ${cpu_string}`, error =>{
    console.log("Error al crar archivo", error);
});