import express from 'express';
import usersRouter from './routes/users.router.js';

const app = express();
const server =  app.listen(8080,()=>console.log("Listeninig Mock"))

app.use('/users',usersRouter);