import  { Router } from 'express';

const router = Router();

router.get('/',(req,res)=>{
    res.render('register');
})

router.get('/login',(req,res)=>{
    res.render('login');
})

router.get('/data',(req,res)=>{
    if(!req.session.user) return res.redirect('/login');
    res.render('data',{user:req.session.user});
})

export default router;