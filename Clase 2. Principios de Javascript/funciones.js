let persona = {
    nombre:"Mauricio",
    apellido:"Espinosa",
    edad:25,
    sayHi:function(){
        console.log("Hola");
    },
    eat:function(){
        console.log("eating");
    }
}

class Cliente{
    constructor(name,last_name,age,email){
        this.name=name;
        this.last_name=last_name;
        this.age=age;
        this.email=email;
        this.pets=[];
    }
    sayHi=function(){
        console.log(`¡Hola, soy ${this.name}`)
    }
    addPet =function(pet){
        this.pets.push(pet);
        console.log("Mis mascotas son:");
        console.log(this.pets);
    }
}

let cliente1 = new Cliente("Mauricio","Espinosa",25,"correo@correo.com");
let cliente2 = new Cliente("Diego","Ezequiel",24,"correo.correo2@correo.com");

cliente1.sayHi();
cliente2.addPet("Aletas")
cliente1.addPet('Patitas')