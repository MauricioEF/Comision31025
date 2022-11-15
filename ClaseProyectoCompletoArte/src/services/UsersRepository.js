import GenericRepository from "./GenericRepository.js";
import User from "../models/User.js";

export default class UserRepository extends GenericRepository {
    constructor(dao) {
        super(dao, User.model);
    }

    getUserByEmail = (email) => {
        return this.getBy({ email })
    }
}