import mongoose from "mongoose";
import MongoDBContainer from "./MongoDBContainer.js";

const collection ='users';
const usersSchema = mongoose.Schema({
    name:String,
    last_name:String
})
export default class Users extends MongoDBContainer{
    constructor(){
        super(collection,usersSchema);
    }
}