const mostrarLetras = (palabra,callback) =>{
    let contador = 0;
    const timer  = setInterval(()=>{
        if(contador<palabra.length){
            console.log(palabra[contador]);
            contador++;
        }else{//Evita el error IndexOutOfBounds
            clearInterval(timer);
            callback();
        }
    },1000)
}

const finalizado = () => console.log("Proceso terminado");

mostrarLetras('Hola',finalizado);