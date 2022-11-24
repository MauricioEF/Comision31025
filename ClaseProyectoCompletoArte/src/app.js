import express from 'express';
import sessionsRouter from './routes/sessions.router.js';
import usersRouter from './routes/users.router.js';
import cors from 'cors';
import __dirname from './utils.js';

const app = express();
const PORT = process.env.PORT||8080;

app.use(express.json());
app.use(express.static(__dirname+'/public'))
app.use(cors());


app.use('/api/sessions/',sessionsRouter);
app.use('/api/users',usersRouter);

const server = app.listen(PORT,()=>console.log(`Listening on ${PORT}`))