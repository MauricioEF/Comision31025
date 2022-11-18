import { userService } from "../services/index.js";

const createUser = async(req,res)=>{
    const {name,email,password}= req.body;
    if(!email||!password) return res.status(400).send({status:"error",error:"Incomplete values"});
    let user = {
        name,
        email,
        password
    }
    let result = await userService.saveUser(user);
    res.send({status:"success",payload:result});
}

const getAllUsers = async(req,res) =>{
    const result = await userService.getAllUsers();
    res.send({status:"success",payload:result});
}

export default {
    createUser,
    getAllUsers
}