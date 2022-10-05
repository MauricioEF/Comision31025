import express from 'express';


const app = express();
const PORT = process.env.PORT ||8080;

app.get('/',(req,res)=>{
    res.send('Listo!')
})

app.listen(PORT,()=>console.log(`listening on ${PORT}`))