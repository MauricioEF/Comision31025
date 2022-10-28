import { Router } from 'express';

const router = Router();

router.get('/',(req,res)=>{
    res.render('login');
})
router.get('/register',(req,res)=>{
    res.render('register');
})

router.get('/recover',(req,res)=>{
    res.render('recover');
})
router.get('/restore',(req,res)=>{
    res.render('restorePassword');
})

export default router;