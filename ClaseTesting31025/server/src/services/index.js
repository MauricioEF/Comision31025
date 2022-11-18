import UsersDao from "../dao/Users.dao.js";
import UserService from "./UserService.js";

export const userService = new UserService(new UsersDao());
