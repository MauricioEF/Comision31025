// let obj = {};

// for(let i = 0; i <10000;i++){
//     let random = Math.floor(Math.random()*20+1);
//     if(obj[random]){//Sí existe el número
//         obj[random]++;
//     }else{//El número todavía no existe.
//         obj[random]=1;
//     }
// }
// console.log(obj);
// let total = Object.values(obj).reduce((accumulator,currentValue)=>accumulator+currentValue,0)
// console.log(total);



const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

let names = productos.map(producto=>producto.nombre);
let total = productos.reduce((accumulator,currentValue)=>accumulator+currentValue.precio,0)
let avg = (total/productos.length).toFixed(2);
let numbers = productos.map(producto=>producto.precio);
let min = Math.min(...numbers)
let max = Math.max(...numbers)

let sendObject = {
    names,
    total,
    avg,
    min,
    max
}//Sólo lo que le llegará al cliente
console.log(sendObject);