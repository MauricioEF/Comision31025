import { Router } from "express";
import PetManager from "../Managers/Pets.js";

const router = Router();
const petsService = new PetManager();
router.get('/',(req,res)=>{
    res.render('welcome')
})
router.get('/newPet',(req,res)=>{
    res.render('newPet')
})
router.get('/pets',async (req,res)=>{
    let pets = await petsService.getAll();
    res.render('pets',{pets})
})
export default router;