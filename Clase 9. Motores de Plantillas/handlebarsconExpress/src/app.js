import express from 'express';
import __dirname from './utils.js';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js';
import usersRouter from './routes/users.router.js'
const app = express();

app.use(express.static(__dirname+'/public'))
const server = app.listen(8080,()=>console.log("Listening on 8080"));

/**
 * Template engine config
 */
app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars')

app.use('/',viewsRouter);
app.use('/api/users',usersRouter);