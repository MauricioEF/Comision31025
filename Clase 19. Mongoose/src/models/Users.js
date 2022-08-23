import mongoose from "mongoose";

const collection = 'users';

const usersSchema = mongoose.Schema({
    first_name:String,
    last_name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"student"
    },
    age:Number,
    active:{
        type:Boolean,
        default:true
    },
    email:{
        type:String,
        default:'correoDefault@correo.com'
    },
    course:String,
    grade:Number,
    dni:String
},{timestamps:true})

const usersService = mongoose.model(collection,usersSchema);
export default usersService;