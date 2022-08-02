import express from 'express';
import __dirname from "./utils.js";
import handlebars from 'express-handlebars';
import {Server} from 'socket.io';
import viewsRouter from './routes/views.router.js'

const app = express ();
const server = app.listen(8080,()=>console.log("Listening on 8080"));
const io = new Server(server);
app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');
app.use(express.static(__dirname+'/public'))
app.use('/',viewsRouter);
const log = [];

io.on('connection',socket=>{
    console.log("connected");
    socket.broadcast.emit('newConnection');
    socket.on('message',data=>{
        log.push(data);
        io.emit('log',log)
    })
})
