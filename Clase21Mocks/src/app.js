import express from 'express';
import faker from 'faker';


const app = express();
const server = app.listen(8080,()=>console.log("Listening"))

// const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana',"Mauricio"]
// const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
// const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']
faker.locale = 'es';
const  {name,internet,datatype } = faker;

app.get('/test',(req,res)=>{
    let testUsers = [];
    for(let i=0; i<100;i++){
        testUsers.push({
            nombre:name.firstName(),
            apellido:name.lastName(),
            email:internet.email(),
            id:datatype.uuid()
        })
    }
    res.send(testUsers);
})