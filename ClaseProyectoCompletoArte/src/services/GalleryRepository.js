import GenericRepository from "./GenericRepository.js";
import Gallery from "../models/Gallery.js";

export default class GalleryRepository extends GenericRepository{
    constructor(dao){
        super(dao,Gallery.model);
    }
}