import express from 'express';
import mongoose from 'mongoose';
import usersService from './models/Users.js';
const app = express();
app.use(express.json())
const server = app.listen(8080,()=>console.log("Monguito"));
const connection = mongoose.connect('mongodb://127.0.0.1:27017/school',err=>{
    if(err){
        console.log("x _ X ");
    }
    else{
        console.log("Connected to database :)")
    }
});

app.get('/users',async (req,res)=>{
    let users = await  usersService.find();
    res.send(users);
})
app.post('/users',async(req,res)=>{
    const {first_name,last_name,email,age,dni,course,grade} = req.body;
    if(!first_name||!last_name||!email||!dni||!course||!grade) return res.status(400).send({error:"Incomplete Values"})
    let newUser = {
        first_name,
        last_name,
        email,
        dni,
        course,
        grade,
        age
    }

    try{
        let result = await usersService.create(newUser);
        res.send({status:"success",payload:result})
    }catch(error){
        res.status(500).send({status:"error",error})
    }
})