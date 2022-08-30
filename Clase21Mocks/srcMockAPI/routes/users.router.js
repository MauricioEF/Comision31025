import { Router } from 'express';
import Users from '../dao/Memory/Users.memory.js';
const router = Router();

const usersService = new Users();
router.get('/',async(req,res)=>{
    let results = await usersService.getAll();
    res.send(results);
})
router.get('/mock',async(req,res)=>{
    let results = await usersService.populate();
    res.send(results);
})
export default router;