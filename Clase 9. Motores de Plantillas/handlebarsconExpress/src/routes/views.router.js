import {Router} from 'express';

const router = Router();

let users = [
    // {first_name:"Mauricio",last_name:"Espinosa"},
    // {first_name:"Mauricio",last_name:"Espinosa"},
    // {first_name:"Mauricio",last_name:"Espinosa"},
    // {first_name:"Mauricio",last_name:"Espinosa"},
    // {first_name:"Mauricio",last_name:"Espinosa"}
]

router.get('/',(req,res)=>{
    res.render('welcome',{})
})

/**
 * Mostrar usuarios
 * 
 */
router.get('/users',(req,res)=>{
    // let users  = await usersManager.getAll();
    res.render('users',{
        hasUsers:users.length>0,
        users
    })
})
export default router;