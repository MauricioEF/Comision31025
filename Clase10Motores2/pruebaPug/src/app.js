import express from 'express';
import __dirname from './utils.js';
const app = express();

const server = app.listen(8080,()=>console.log("Listening on 8080"));

app.set('views',__dirname+'/views');
app.set('view engine','pug');

let users = [
    {first_name:"Santiango",last_name:"Falco"},
    {first_name:"Santiango",last_name:"Falco"},
    {first_name:"Santiango",last_name:"Falco"},
    {first_name:"Santiango",last_name:"Falco"},
    {first_name:"Santiango",last_name:"Falco"},
]
app.get('/',(req,res)=>{
    res.render('welcome.pug',{
        message:"Papa con queso"
    })
})
app.get('/datos',(req,res)=>{
    let {min,max,valor,title} = req.query;
    res.render('medidor.pug',{
        min,
        max,
        valor,
        title,
        users
    })
})
