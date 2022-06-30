class Contador{
    constructor(responsable){
        this.responsable=responsable;
        this.contador=0;
    }
    static contadorGlobal = 0; 

    obtenerResponsable=function(){
        return this.responsable;
    }
    obtenerCuentaIndividual=function(){
        return this.contador;
    }
    obtenerCuentaGlobal =function(){
        return Contador.contadorGlobal;
    }
    contar = function(){
        this.contador++;
        console.log(this.contador);
        Contador.contadorGlobal++;
    }
}

let contador1 = new Contador("Mauricio");
let contador2 = new Contador("Julián");

console.log(contador1.obtenerResponsable())
contador2.contar();
console.log(contador1.obtenerCuentaGlobal())
console.log(contador1.obtenerCuentaIndividual());
contador1.contar();
contador1.contar();
contador1.contar();
contador1.contar();
contador1.contar();
contador1.contar();
contador1.contar();