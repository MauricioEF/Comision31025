import GenericRepository from "./GenericRepository.js";
import Artwork from "../models/Artwork.js";


export default class ArtworkRepository extends GenericRepository {
    constructor(dao) {
        super(dao,Artwork.model);
    }
}