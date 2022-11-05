import mongoose from 'mongoose';

const collection = "Carts";

const schema = new mongoose.Schema({
    artworks: [
        {
            artwork:{
                type:mongoose.SchemaTypes.ObjectId,
                ref:'Artworks'
            },
            quantity:{
                type:Number,
                default:1
            }
        }
    ]
})

const cartsModel =  mongoose.model(collection,schema);

export default cartsModel;
