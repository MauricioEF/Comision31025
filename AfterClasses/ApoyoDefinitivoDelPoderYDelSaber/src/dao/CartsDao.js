import cartsModel from "./models/cart.dao.js";

export default class CartsDao {
    
    getById = (id) =>{
        return cartsModel.findOne({_id:id}).lean();
    }

    getByIdAndPopulate = (id) =>{
        return cartsModel.findOne({_id:id}).lean().populate('artworks.artwork')
    }

    save = () =>{
        return cartsModel.create({artworks:[]})
    }
    update = (id,cart) =>{
        return cartsModel.findByIdAndUpdate(id,{$set:{artworks:cart.artworks}})
    }
    
}