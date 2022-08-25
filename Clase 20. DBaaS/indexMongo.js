import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://coderuser:123@clustercitoconquesoypap.jfmpome.mongodb.net/testAtlas?retryWrites=true&w=majority',err=>{
    if(err) console.log(err);
    else console.log("Base conectada a Atlas");
});
