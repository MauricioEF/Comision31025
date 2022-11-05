import { artworkService } from "../services/index.js";

const createArtwork = async(req,res)=>{
    if(!req.file) return res.status(500).send({status:"error",error:'Error al cargar imagen'});
    const {title,author,price,copies} = req.body;
    if(!title||!author||!price||!copies) return res.status(400).send({status:"error",error:"Valores incompletos"});
    const artwork = {
        title,
        author,
        price,
        copies,
        image:`${req.protocol}://${req.host}:${process.env.PORT}/images/${req.file.filename}`
    }
    let result = await artworkService.createArtwork(artwork);
    res.send({status:"success",payload:result})
}

export default {
    createArtwork
}