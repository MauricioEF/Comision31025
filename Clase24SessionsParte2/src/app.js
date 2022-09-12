import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js'
import sessionsRouter from './routes/sessions.router.js'
import mongoose from 'mongoose';

const app = express();
const connection = mongoose.connect("URL DE MONGUITO AQUÍ")

app.use(express.json());
app.use(express.static(__dirname+'/public'))

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

app.use('/',viewsRouter);
app.use('/api/sessions',sessionsRouter);
const server = app.listen(8080,()=>console.log("RAWWWR"))