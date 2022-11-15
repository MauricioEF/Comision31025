import Dao from '../models/Dao.js';
import UserRepository from './UsersRepository.js';
import ArtworkRepository from './ArtworkRepository.js';
import GalleryRepository from './GalleryRepository.js';

const dao = new Dao();

export const userService = new UserRepository(dao);
export const artworkService = new ArtworkRepository(dao);
export const galleryService = new GalleryRepository(dao);