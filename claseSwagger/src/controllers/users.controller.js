import { usersService } from "../services/services.js";

const getUsers = async(req,res)=> {
    const users = await usersService.get();
    res.send({users})
}

const saveUser = async(req,res)=>{
    const user = req.body;
    let result = await usersService.save(user);
    res.send({result})
}

export default {
    getUsers,
    saveUser
}