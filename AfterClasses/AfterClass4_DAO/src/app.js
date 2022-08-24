import express from 'express';
import mongoose from 'mongoose';
import studentsService from './models/Student.js';
const app = express();
const server = app.listen(8080,()=>console.log("Listo :)"))
mongoose.connect('mongodb://127.0.0.1/colegio')

app.get('/students',async(req,res)=>{
    let results = await studentsService.find();
    res.send(results);
})
app.post('/students',async(req,res)=>{
    let students =[
        { name: 'Pedro', last_name: 'Mei', age: 21, dni: '31155898', course: '1A', grade: 7 },
        { name: 'Ana', last_name: 'Gonzalez', age: 32, dni: '27651878', course: '1A', grade: 8 },
        { name: 'José', last_name: 'Picos', age: 29, dni: '34554398', course: '2A', grade: 6 },
        { name: 'Lucas', last_name: 'Blanco', age: 22, dni: '30355874', course: '3A', grade: 10 },
        { name: 'María', last_name: 'García', age: 36, dni: '29575148', course: '1A', grade: 9 },
        { name: 'Federico', last_name: 'Perez', age: 41, dni: '320118321', course: '2A', grade: 5 },
        { name: 'Tomas', last_name: 'Sierra', age: 19, dni: '38654790', course: '2B', grade: 4 },
        { name: 'Carlos', last_name: 'Fernández', age: 33, dni: '26935670', course: '3B', grade: 2 },
        { name: 'Fabio', last_name: 'Pieres', age: 39, dni: '4315388', course: '1B', grade: 9 },
        { name: 'Daniel', last_name: 'Gallo', age: 25, dni: '37923460', course: '3B', grade: 2 }
    ]
    
    let results = await studentsService.insertMany(students)
    res.send({status:"success",payload:results})
})

app.get('/alphabeticSort',async(req,res)=>{
    let results = await studentsService.find().sort({name:1})
    res.send(results);
})
app.get('/youngest',async(req,res)=>{
    let student = await studentsService.find().sort({age:1}).limit(1);
    res.send(student);
})
app.get('/course',async(req,res)=>{
    let students = await studentsService.find({course:"2A"});
    res.send(students);
})
app.get('/secondYoungest',async(req,res)=>{
    let students = await studentsService.find().sort({age:1}).skip(1).limit(1);
    res.send(students);
})
app.get('/projection',async(req,res)=>{
    let students = await studentsService.find({},{name:1,last_name:1,course:1,_id:0})
    res.send(students);
})
app.get('/projectionWithSort',async(req,res)=>{
    let students = await studentsService.find({},{name:1,last_name:1,course:1,_id:0}).sort({last_name:-1})
    res.send(students);
})
app.get('/bestGrade',async(req,res)=>{
    let students = await studentsService.find({grade:10});
    res.send(students);
})
app.get('/average',async(req,res)=>{
    let results = await studentsService.aggregate([
        {$group:{_id:1,average:{$avg:"$grade"}}}
    ])
    res.send(results);
})
app.get('/averageByGroup',async(req,res)=>{
    let results = await studentsService.aggregate([
        {$match:{course:"2A"}},
        {$group:{_id:"$course",average:{$avg:"$grade"}}}
    ])
    res.send(results);
})
app.put('/students',async(req,res)=>{
    let results = await studentsService.updateOne({name:"Lucas",last_name:"Blanco"},{$set:{dni:"20355875"}});
    res.send(results);
})
app.put('/createProperty',async(req,res)=>{
    let results = await studentsService.updateMany({},{$set:{studentEntry:false}})
    res.send(results);
})
app.put('/entries',async(req,res)=>{
    let results = await studentsService.updateMany({course:"1A"},{$set:{studentEntry:true}})
    res.send(results);
})

app.delete('/byebye',async(req,res)=>{
    let results = await studentsService.deleteMany({course:"1A"})
    res.send(results);
})