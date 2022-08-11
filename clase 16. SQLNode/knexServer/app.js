import db from "./db/sqlBase.js";
import express from 'express';

const app = express();
const server = app.listen(8080,()=>console.log("Listening"));

let pets =[
    {name:"patas",specie:"pez",age:1},
    {name:"aletas",specie:"perro",age:2},
    {name:"orejas",specie:"conejo",age:4},
]

app.get('/pets',async(req,res)=>{
    try{
        let pets = await db('pets').select('*');
        res.send(pets);
    }catch(error){
        res.status(500).send("Cannot get pets");
    }
})
app.get('/insert',async(req,res)=>{
    try{
        let result = await db('pets').insert(pets);
        res.send(result);
    }catch(error){
        res.status(500).send("Cannot insert pets");
    }
})