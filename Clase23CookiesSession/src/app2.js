import express from 'express';
import session from 'express-session';


const app = express();
const server = app.listen(8080,()=>console.log("Ok session"))

app.use(express.json());
app.use(session({
    secret:"C0derSessi0n3000",
    resave:true,
    saveUninitialized:true
}))

app.get('/counter',(req,res)=>{
    if(req.session.counter){
        req.session.counter++;
        res.send(`¡Hola de nuevo! visitaste esto ${req.session.counter} veces`)
    }else{
        req.session.counter=1;
        res.send("Bienvenido :)")
    }
})

app.post('/login',(req,res)=>{
    const {email,password} = req.body;
    if(email==="correo@correo.com"&&password==="123"){
        req.session.user={
            email,
            role:"user"
        }
        return res.send("Logged in :)")
    }
    else{
        res.send("Incorrect credentials")
    }
})
app.get('/current',(req,res)=>{
    if(req.session.user){//Sí pasó por el login :) 
        res.send(req.session.user);
    }else{//No podemos dejarlo avanzar porque no se ha logueado
        res.send("Please login first")
    }
})
app.get('/logout',(req,res)=>{
    req.session.destroy(err=>{
        if(err) return res.send("Couldn't log out try again");
        else return res.send("Logged out :)");
    })
})