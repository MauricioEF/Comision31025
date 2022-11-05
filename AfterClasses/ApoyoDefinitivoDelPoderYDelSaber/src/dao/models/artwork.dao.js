import mongoose from "mongoose";

const collection = "Artworks";

const schema = new mongoose.Schema({
    title:String,
    author:String,
    price:Number,
    copies:Number,
    image:String
})

const artworkModel = mongoose.model(collection,schema);
export default artworkModel;