import multer from 'multer';

//Pensar dónde se almacenará
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"public/img")
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname)
    }
})

const uploader = multer({storage:storage})


export default uploader;