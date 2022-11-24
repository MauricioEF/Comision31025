import Dao from '../models/dao.js';
import UserRepository from './Users.js';


const dao = new Dao();

export const usersService =  new UserRepository(dao);
