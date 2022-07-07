import express from 'express';
import moment from 'moment';
const app = express();//NO SE PONE new express();
const PORT = 8080;
let counter = 0;
const server = app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`)
})
app.get('/',(req,res)=>{
    res.send("<h1>Bienvenido al servidor Express</h1>")
})
app.get('/papaconqueso',(req,res)=>{
    res.send("Papa con queso");
})
app.get('/visitas',(req,res)=>{
    counter++;
    res.send(`El endpoint se ha visitado ${counter} veces`)
})
app.get('/fyh',(req,res)=>{
    let currentTime = moment();
    res.send(currentTime.format('DD/MM/YYYY hh:mm:ss'))
})

app.get('/info',async (req,res)=>{
    console.log(req.query);//¡req.query es un objeto!
    let role = req.query.role;
    if(!role) return res.send("No se envió un rol, favor de definir el rol, para enviar la info")
    //Si llegó hasta este punto, entonces es que sí me envió un rol.
    if(role!=="admin") return res.send("Información confidencial, no puede acceder aquí")
    //Si llegó hasta este punto, sí envió el rol, y sí es admin
    res.send("aquí tiene la info:" )
})