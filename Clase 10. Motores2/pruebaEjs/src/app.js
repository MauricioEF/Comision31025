import express from 'express'
import __dirname from './utils.js'

const app = express()

const server=app.listen(8080, ()=>console.log('listening on 8080 port'))

app.use(express.json());
app.set('views',__dirname+'/views')
app.set('view engine','ejs')
let pets = [
    {name:"Güerita",specie:"dog"},
    {name:"Ip man",specie:"dog"}
]
let users = []
app.get('/another',(req,res)=>{
    res.render('home',{
        title:"PRIMERA PLANTILLA EJS",
        pets
    })
})
app.get('/',(req,res)=>{
    res.render('form',{
        users
    });
})

app.post('/users',(req,res)=>{
    const user = req.body;
    console.log(user);
    users.push(user);
    res.redirect('/')
})