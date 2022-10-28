import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import sessionsRouter from './routes/sessions.router.js';
import viewsRouter from './routes/views.router.js';
import mongoose from 'mongoose';


const app = express();
const connection = mongoose.connect('mongodb+srv://CoderUser:123@codercluster.w5adegs.mongodb.net/recuperacionContrasena?retryWrites=true&w=majority')

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views')
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.static(__dirname+'/public'));

app.use('/',viewsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(8080,()=>console.log("Listening"))