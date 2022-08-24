import mongoose from "mongoose";

const collection = "students";

const studentsSchema = mongoose.Schema({
    name:String,
    last_name:String,
    age:Number,
    dni:String,
    course:String,
    grade:Number,
    studentEntry:Boolean
})

const studentsService =  mongoose.model(collection,studentsSchema);
export default studentsService;