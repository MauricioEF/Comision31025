import {Router} from 'express';
import uploader from '../utils.js';

const router = Router();

const pets = [];


router.use((req,res,next)=>{
    // let user = req.query.user;
    req.papaconqueso="papa";
    // if(!user) return res.status(401).send({error:"Not authenticated"})
    next();
})

const middlewareAutenticacionDeMascotas = (req,res,next)=>{
    a=1;
    next();
}

router.get('/',(req,res)=>{

})

router.post('/',uploader.single('file'),(req,res)=>{
    console.log(req.file);
    console.log(req.papaconqueso);
    let pet = req.body;
    pet.image = req.file.path;
    console.log(pet);
    if(!pet.name) return res.status(400).send({status:"error",error:"Invalid input"})
    pets.push(pet);
    res.send({status:"success",message:"pet added"})
})

router.put('/',(req,res)=>{
    
})

router.delete('/',(req,res)=>{
    
})


export default router;