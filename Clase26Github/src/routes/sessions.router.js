import {Router} from 'express';
import userService from '../models/User.js';
import { createHash, isValidPassword } from '../utils.js';
import passport from 'passport';

const router = Router();

router.post('/register',passport.authenticate('register',{failureRedirect:'/api/sessions/registerfail'}),async (req,res)=>{
    console.log(req.user);
    res.send({status:"success",payload:req.user._id});
})
router.get('/registerfail',(req,res)=>{
    console.log("Something is wrong")
    res.status(500).send({status:"error",error:""})
})
router.post('/login',passport.authenticate('login',{failureRedirect:'/api/sessions/loginfail'}),async(req,res)=>{
    req.session.user = {
        name:req.user.name,
        email:req.user.email,
        id:req.user._id
    }
    res.send({status:'success',payload:req.session.user})
})

router.get('/loginfail',(req,res)=>{
    res.status(500).send({status:"error",error:"Error in login "})
})


router.get('/github',passport.authenticate('github',{scope:[]}),async(req,res)=>{
    //Este punto de aquí, se encarga de ABRIR LA APLICACIÓN EN EL NAVEGADOR
})

router.get('/githubcallback',passport.authenticate('github'),(req,res)=>{
    req.session.user = {
        name:req.user.name,
        email:req.user.email,
        id:req.user._id
    }
    res.redirect('/data');
})

export default router;