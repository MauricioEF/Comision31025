console.log("Hola mamá");
let button = document.getElementById('botonCallback')

const decirHola = () => console.log("Hola");
const decirAdios = () => console.log("Adiós");
const alertar = () =>{
    alert("Hola");
}
button.addEventListener('click',alertar)