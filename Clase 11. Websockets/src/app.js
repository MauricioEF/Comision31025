import express from 'express';
import __dirname from './utils.js';
import { Server } from 'socket.io';

const app = express();

const server = app.listen(8080,()=>console.log("Listening on 8080"));
const io = new Server(server);

app.use(express.static(__dirname+'/public'));

io.on('connection',socket=>{
    //socket representa el socket cliente que se haya conectado en el evento.
    //CUERPO DE EVENTOS DE SOCKET.
    //TODO SOCKET SE BASA EN .on y .emit
    //.on = escucha el evento
    //.emit = envía el evento.
    //socket.emit => enviar sólo al socket conectado
    //io.emit => envía a TODOS los conectado
    socket.on('saludo',data=>{
        // socket.emit('perros',["perro1","perro2","perro3"])
    })
    socket.on('message',data=>{
        io.emit('log',`${socket.id} dice: ${data}`)
    })
})
