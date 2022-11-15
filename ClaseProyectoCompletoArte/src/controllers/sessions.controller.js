import { UserInsertDTO } from "../DTO/User.dto.js";
import { userService, galleryService } from "../services/services.js";
import { createHash } from "../utils.js";

const register = async(req,res) =>{
    let {first_name,last_name,password,email,address} = req.body;
    try{
        if(!req.file) return res.status(500).send({status:"error",error:"No se pudo cargar el avatar"});
        let user = await userService.getUserByEmail(email);
        if(user) return res.status(400).send({status:"error",error:"El usuario ya existe"});
        let gallery = await galleryService.save({artworks:[]})
        const hashedPassword = await createHash(password);
        const newUser = {
            first_name,
            last_name,
            email,
            address,
            password:hashedPassword,
            gallery:gallery._id,
            avatar:`${req.protocol}://${req.host}:${process.env.PORT}/images/${req.file.filename}`
        }
        const insertUser = new UserInsertDTO(newUser);
        let result = await userService.save(insertUser);
        res.send({status:"success",message:"User registered"})
    }catch(error){
        console.log(error);
        res.status(500).send({status:"error",error:"Internal error",trace:error})
    }
}

export default {
    register
}