import {Router} from 'express';


const router = Router();

let users = [
    {first_name:"Mauricio",last_name:"Espinosa"},
    {first_name:"Mauricio",last_name:"Espinosa"},
    {first_name:"Mauricio",last_name:"Espinosa"},
    {first_name:"Mauricio",last_name:"Espinosa"},
    {first_name:"Mauricio",last_name:"Espinosa"}
]

router.get('/',(req,res)=>{
    //ENVIAR USUARIOS
    res.send(users)
})
export default router;