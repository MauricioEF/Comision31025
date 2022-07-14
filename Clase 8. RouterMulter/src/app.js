import express from 'express';
import usersRouter from './routes/users.router.js';
import productsRouter from './routes/products.router.js';
import petsRouter from './routes/pets.router.js'
const app = express();

const server = app.listen(8080,()=>console.log("Now listening on 8080"))

/*Middleware nivel aplicación */
// app.use((req,res,next)=>{
//     // let user = req.query.user;
//     req.papaconqueso="papa";
//     // if(!user) return res.status(401).send({error:"Not authenticated"})
//     next();
// })

app.use(express.json());
app.use('/users',usersRouter);
app.use('/products',productsRouter);
app.use('/pets',petsRouter);
app.use(express.static('public'));
