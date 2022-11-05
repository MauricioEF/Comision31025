import express from 'express';
import usersRouter from './routes/users.router.js';
const app = express();

const server = app.listen(8080,()=>console.log("Listening on 8080"));

app.use('/api/users',usersRouter);
