import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const server = app.listen(8080,()=>console.log("Hello cookies"))

app.use(cookieParser("Potat0SecretPlus4000"));
app.use(express.json());

app.get('/cookie',(req,res)=>{
    res.cookie('cookieconquesito',{a:1,c:2}).send("cookie set")
})
app.get('/cookieSecret',(req,res)=>{
    res.cookie('superCookieBlindada',{nombre:"mauricio",email:"correo@correo.com"},{
        signed:true
    }).send("Cookie blindada seteada con poder :)")
})

app.get('/cookieQuesePuedeMorirPobrecita',(req,res)=>{
    res.cookie('cookieconpapas',"Mauricio :)",{
        maxAge:10000
    }).send("Cookie moribunda")
})
app.get('/galletitas',(req,res)=>{
    res.send(req.cookies);
})
app.get('/galletitasUltraSecretas',(req,res)=>{
    res.send(req.signedCookies);
})
app.get('/logout',(req,res)=>{
    res.clearCookie('cookieconquesito').send('Logged out')
})
app.post('/setCookie',(req,res)=>{
    const {name,value,expiresAtInSeconds} = req.body;
    res.cookie(name,value,{
        maxAge: expiresAtInSeconds?expiresAtInSeconds*1000:0
    }).send("Aquí está tu cookie personalizada brother :)")
})
app.get('/logoutPostmanCookie/:name',(req,res)=>{
    const {name} = req.params;
    if(!name) return res.send("Name not found")

    res.clearCookie(name).send("Byebyebye")
})