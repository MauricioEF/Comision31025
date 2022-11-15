import mongoose from 'mongoose';

export default class User {
    static get model() {
        return 'Users';
    }
    static get schema() {
        return {
            first_name:String,
            last_name:String,
            password:String,
            email:String,
            role:{
                type:String,
                enum:['user','artist','admin'],
                default:'user'
            },
            avatar:String,
            address:String,
            gallery:{
                type:mongoose.SchemaTypes.ObjectId,
                ref:'Galleries'
            }
        }
    }
}
