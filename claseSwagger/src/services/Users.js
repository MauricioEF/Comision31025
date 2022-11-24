import User from "../models/User.js";
import GenericRepository from "./GenericRepository.js";

export default class UserRepository extends GenericRepository {
    constructor(dao){
        super(dao,User.model);
    }
}