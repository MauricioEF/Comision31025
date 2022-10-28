import mongoose from 'mongoose';

const collection = 'Users';

const schema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const userModel = mongoose.model(collection,schema);

export default userModel;