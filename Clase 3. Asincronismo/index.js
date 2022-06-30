// function sumar(num1,num2){
//     return num1+num2;
// }

// let res = sumar(2,3);

// // const restar  = (num1,num2) =>{
// //     return num1-num2;
// // }
// const restar = (num1,num2) => num1-num2; //Return implícito
// const elevarAlCuadrado = base => base**2;



// const multiplicarPor2 = num => num*2;
// const dividir = num => num/2;
// // const miPropioMap = (array,funcionCallback)=>{

// // }

const sumar = (num1,num2) =>num1+num2;
const restar = (num1,num2) =>num1-num2;

const operacion = (num1,num2,operador)=>{ //CALLBACK
    return operador(num1,num2);
}

console.log(operacion(2,3,sumar));

