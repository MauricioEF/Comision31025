const fs = require('fs');

// fs.writeFile('pruebacallback.txt','Hola desde callbacks',(error)=>{
//     if(error){
//         console.log("hubo un error");
//     }else{
//         console.log("Todo bien :) Archivo escrito")
//     }
// })

// fs.readFile('pruebacallback.txt','utf8',(error,result)=>{
//     if(error){
//         console.log("Hay un error");
//     }else{
//         console.log(result);
//     }
// })


// fs.appendFile('pruebacallback.txt','PruebaDeAppend',(error)=>{
//     if(error){
//         console.log("No se pudo hacer el append")
//     }
//     else{
//         console.log("Todo bien en el append");
//     }
// })


// fs.unlink('pruebacallback.txt',(error)=>{
//     if(error){
//         console.log("Hay error al eliminar");
//     }else{
//         console.log("Eliminado");
//     }
// })