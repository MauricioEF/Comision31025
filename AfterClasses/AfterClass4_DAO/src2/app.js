import express from 'express';
import services from './dao/index.js';
const app = express();
const server = app.listen(8080,()=>console.log("Listo :)"))

app.use(express.json());
app.get('/users',async(req,res)=>{
    let results = await services.usersService.getAll();
    res.send(results);
})
app.post('/users',async(req,res)=>{
    let results = await services.usersService.save(req.body);
    res.send(results);
})