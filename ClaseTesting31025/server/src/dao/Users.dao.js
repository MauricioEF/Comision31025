import usersModel from "./models/User.model.js";


export default class UsersDao {
    getUsers = () =>{
        return usersModel.find();
    }

    saveUser = (user) =>{
        return usersModel.create(user);
    }
}