const _ = require('lodash');

const argv = require('yargs').argv;


/*let comando = process.argv[2];
if(comando === "usuario"){
    if(process.argv[3] === "Kenyo"){

        let x= {"nombre": "Kenyo"};
        let y = {"apodo": "DEV"};
        let z= [
            { nombre:"Kenyo", apellido:"Pecho", edad: 26},
            { nombre:"Juan", apellido:"Pecho", edad: 25}
        ];
        
        let resultado = _.assign(x, y);
        console.log(resultado);
        
        _.times(3, ()=>console.log('subscribete'));
        
        let res = _.find(z, {nombre: "Kenyo"});
        console.log(res);
    }else{
        console.log("Usuario no valido");
    }
}*/

if(argv.usuario === "kenyo"){
    
    let x= {"nombre": "Kenyo"};
    let y = {"apodo": "DEV"};
    let z= [
        { nombre:"Kenyo", apellido:"Pecho", edad: 26},
        { nombre:"Juan", apellido:"Pecho", edad: 25}
    ];
    
    let resultado = _.assign(x, y);
    console.log(resultado);
}else{
    console.log("Usuario no valido");
}


