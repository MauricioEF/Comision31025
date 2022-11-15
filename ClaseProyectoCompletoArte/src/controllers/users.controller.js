import {UserPresenterDTO} from "../DTO/User.dto.js";
import { userService } from "../services/services.js"

const getUsers = async(req,res)=>{
    const result = await userService.getAll();
    const users = result.map(u=>new UserPresenterDTO(u));
    res.send({users});
}

export default {
    getUsers
}