import express from 'express';
import usersController from './controller/users.controller.js';
import mongoose from 'mongoose';

const app = express();
const connection = mongoose.connect(`mongodb+srv://CoderUser:123@codercluster.w5adegs.mongodb.net/?retryWrites=true&w=majority
`)
app.use(express.json());

app.get('/',(req,res)=>{
    res.send({status:"success",message:"Hola, clientes :)"})
})


app.get('/api/users',usersController.getAllUsers);
app.post('/api/users',usersController.createUser);




app.get('/peticion1',(req,res)=>{
    res.send({status:"success",message:"petición 1"})
})

app.get('/peticion2',(req,res)=>{
    res.status(400).send({status:"success",message:"petición 2"})
})
const server = app.listen(8080,()=>console.log("Listening on 8080"))