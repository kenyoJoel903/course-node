let calcular  = (num1, num2) =>{
    return new Promise((res, rej)=>{
        setTimeout(() => {
            let suma = num1 + num2;
            if(suma>5){
                res(suma);
            }else{
                rej('Error al procesar suma');
            }
        }, 2000);
    });
}

module.exports = {
    calcular: calcular
}