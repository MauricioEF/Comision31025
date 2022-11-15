import { artworkService } from "../services/services.js";

const createArtwork = async(req,res) =>{
    const {title,description,author, price, copies, creationDate } = req.body;
    try{
        if(!req.file) return res.status(500).send({status:"error",error:"No se pudo subir el archivo"});
        const newArtwork = {
            title,
            description,
            author,
            price,
            copies,
            creationDate,
            image: `${req.protocol}://${req.host}:${process.env.PORT}/images/${req.file.filename}`
        }
        let result = await artworkService.save(newArtwork);
        res.send({status:"success",message:"Artwork created"})
    }catch(error){
        console.log(error);
        res.status(500).send({status:"error",error:"Internal error",trace:error})
    }
}

export default {
    createArtwork
}

