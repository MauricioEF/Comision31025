//SetTimeOut

// setTimeout(()=>{
//     console.log("Hola :)")
// },5000)

//setInterval
let contador = 0;
let timer = setInterval(()=>{
    console.log("Hola desde interval :)") 
    contador++;
    if(contador===5){
        clearInterval(timer)
    }
},2000)