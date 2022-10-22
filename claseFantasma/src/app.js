import express from 'express';

const app = express();
const PORT = process.env.PORT||8080
app.listen(PORT,()=>console.log(`Listening on PORT ${PORT}`))

app.get('/',(req,res)=>{
    res.send({status:"success",message:"listo"})
})
app.get('/variable',(req,res)=>{
    res.send({status:"success",variable:process.env.PAPA})
})