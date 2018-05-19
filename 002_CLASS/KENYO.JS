console.log("hola Kenyo");

 let friends = 22000;
 function saludar(){
     console.log('Hola amigo');
 }
 /*module.exports.friends = friends;
 module.exports.saludar = saludar();*/
 module.exports = {
     subs: friends,
     saludar: function(){
         console.log("Hola amigo");
     }
 }