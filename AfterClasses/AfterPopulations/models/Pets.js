import mongoose from 'mongoose';

const collection = 'Pets';
const schema = new mongoose.Schema({
    name:String,
    specie:String,
    adopted: {
        type:Boolean,
        default:false
    },
    owner:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Users'
    }
})

const petService = mongoose.model(collection,schema);

export default petService;