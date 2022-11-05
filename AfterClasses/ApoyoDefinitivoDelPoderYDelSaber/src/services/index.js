import UsersDao from "../dao/UsersDao.js";
import CartsDao from "../dao/CartsDao.js";
import ArtworkDao from "../dao/ArtworkDao.js";

import UserService from "./UserService.js";
import CartsService from "./CartsService.js";
import ArtworkService from "./ArtworkService.js";

export const usersService =  new UserService(new UsersDao());
export const cartsService = new CartsService(new CartsDao());
export const artworkService = new ArtworkService(new ArtworkDao());
