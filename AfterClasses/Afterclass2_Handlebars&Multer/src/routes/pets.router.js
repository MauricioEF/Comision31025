import {Router} from 'express';
import {uploader} from '../utils.js'
import PetManager from '../Managers/Pets.js';

const router = Router();
const petService = new PetManager();
router.get('/',(req,res)=>{

})
router.post('/',uploader.single('image'),async (req,res)=>{
    const {name,specie,age} = req.body;
    console.log(req.file);
    if(!req.file) return res.status(500).send({status:"error",error:"Couldn't upload file"});
    if(!name||!specie||!age) return res.status(400).send({status:"error",error:"Incomplete values"});
    let pet = {
        name,
        specie,
        age,
        image : req.file.filename,
    }
    await petService.createPet(pet);
    res.send({status:"success",message:"Pet created"})
})

export default router;