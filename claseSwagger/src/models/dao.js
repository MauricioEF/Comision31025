import mongoose from 'mongoose';
import User from './User.js';


export default class Dao {
        constructor(){
            this.connection = mongoose.connect('MONGO URL')
            const userSchema = mongoose.Schema(User.schema);
            this.models = {
                [User.model] : mongoose.model(User.model,userSchema)
            }
        }

        getAll = (params, entity) =>{
            if(!this.models[entity]) throw new Error('Model is not defined in dao')
            return this.models[entity].find(params).lean();
        }
        getBy = (params,entity) => {
            if(!this.models[entity]) throw new Error('Model is not defined in dao')
            return this.models[entity].findOne(params).lean();
        }
        save = (document,entity) =>{
            if(!this.models[entity]) throw new Error('Model is not defined in dao')
            return this.models[entity].create(document);
        }
        
}