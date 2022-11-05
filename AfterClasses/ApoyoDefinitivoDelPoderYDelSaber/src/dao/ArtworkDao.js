import artworkModel from "./models/artwork.dao.js";

export default class ArtworkDao {

    getAll = () =>{
        return artworkModel.find();
    }
    getById = (id) =>{
        return artworkModel.find({_id:id})
    }

    save = artwork =>{
        return artworkModel.create(artwork);
    }

    update = (id,artwork) =>{
        return artworkModel.findByIdAndUpdate(id,{$set:artwork});
    }
}