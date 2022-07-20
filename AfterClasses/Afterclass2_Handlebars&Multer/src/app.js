import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import petsRouter from './routes/pets.router.js'
const app = express();

const server = app.listen(8080,()=>console.log("Listening on PORT 8080"));

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views')
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.static(__dirname+'/public'))
app.use('/',viewsRouter);
app.use('/api/pets',petsRouter);