import {Router} from 'express';
import userService from '../models/User.js';
import { createHash } from '../utils.js';
const router = Router();

router.post('/register',async (req,res)=>{
    const {name,email,password} = req.body;
    if(!name||!email||!password) return res.status(400).send({status:"error",error:"Incomplete values"})
    //¿El usuario ya está en la base de datos?
    const exists = await userService.findOne({email:email});
    if(exists) return res.status(400).send({status:"error",error:"User already exists"})
    //Insertamos en la base
    const newUser = {
        name,
        email,
        password:createHash(password)
    }
    let result = await userService.create(newUser);
    res.send(result);
})

export default router;