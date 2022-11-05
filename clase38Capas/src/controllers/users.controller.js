import { userService } from "../services/index.js";

const getAllUsers = async(req,res) =>{
    try{
        let users = await userService.getUsers();
        res.send({status:"success",payload:users});

    }catch(error){
        console.log(error);
        res.send({status:"error",error})
    }
}

export default {
    getAllUsers
}