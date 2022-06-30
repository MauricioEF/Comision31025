const dividir = (dividendo,divisor) =>{
    return new Promise((resolve,reject)=>{
        if(divisor===0){
            reject('No se puede dividir por 0')
        }else{
            resolve(dividendo/divisor)
        }
    })
}

//.then  = Cuando queremos obtener el resultado de la promesa que SÍ se cumplió.
//.catch = Cuando queremos atrapar el error por el cual NO se resolvió la promesa.
//UNA PROMESA ES ASÍNCRONA

console.log("Iniciando operación de división")
dividir(2,4)//console.log lee SÍNCRONO
.then(result=>{
    return result+1;
})
.then(result=>{
    if(result<5){
        throw new Error("El número es muy bajo")
    }else{
        console.log(result);
    }
})
.catch(error=>console.log(error))
console.log("Operación de división finalizada")

const proceso = async() =>{
    //TODO lo que esté aquí dentro, se va a tratar asíncrona
    try{
        let resultado = await dividir(2,4);
        let resultado2 = resultado+1;
        console.log(resultado2);
    }catch(error){
        console.log(error);
    }
    
}
proceso()