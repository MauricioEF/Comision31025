import mongoose from "mongoose";

export default class MongoDBContainer{
    constructor(collection,schema){
        mongoose.connect('mongodb://127.0.0.1/baseFeliz')
        this.model = mongoose.model(collection,schema);
    }

    getAll = async() =>{
        let results = await this.model.find();
        return results;
    }
    save = async(document) =>{
        let results = await this.model.create(document);
        return results;
    }
}