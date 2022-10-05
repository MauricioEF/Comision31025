import express from 'express';
import os from 'os';
import cluster from 'cluster';

const CPUs = os.cpus().length;
const app = express();
if(cluster.isPrimary){
    console.log(`Soy un proceso primario con pid ${process.pid}`);
    for(let i=0;i<CPUs;i++){
        cluster.fork();
    }
    cluster.on('exit',worker=>{
        console.log(`Murió el proceso worker con pid ${worker.process.pid}`)
        cluster.fork();
    })
}
else{
    console.log(`Soy un proceso worker con pid ${process.pid}`)
    app.listen(8080,()=>console.log("Listening"))
}
app.get('/',(req,res)=>{
    res.send(`El proceso con pid ${process.pid} atendió esta consulta`)
})
app.get('/suma',(req,res)=>{
    let suma = 0;
    for(let i=0;i<5e9;i++){
        suma+=i;
    }
    res.send(`Suma entregada con pid ${process.pid} con resultado ${suma}`)
})