import { usersService,cartsService } from "../services/index.js";
import { createHash, isValidPassword } from "../utils.js";
import jwt from 'jsonwebtoken';
import config from "../config/config.js";

const register = async(req,res)=>{
    const {first_name,last_name,email,phone,password,age} = req.body;
    if(!first_name||!last_name||!email||!phone||!password) return res.status(400).send({status:"error",error:"Valores incompletos"});
    let exists = await usersService.getUserByEmail(email);
    if(exists) return res.status(400).send({status:"error",error:"El usuario ya existe"});
    //Anexar el carrito
    const cart = await cartsService.createCart();
    const hashedPassword = await createHash(password);
    const user ={
        first_name,
        last_name,
        email,
        phone,
        age,
        password:hashedPassword,
        cart:cart._id
    }
    const result = await  usersService.saveUser(user);
    res.send({status:"success",payload:result})
}

const login = async(req,res)=>{
    const {email,password} = req.body;
    if(!email||!password) return res.status(400).send({status:"error",error:"Valores incompletos"})
    if(email===config.session.ADMIN_EMAIL&&password===config.session.ADMIN_PWD){
        const sessionAdminUser = {
            name:"Admin Coder",
            role:"admin",
            id:'0'
        }
        const token = jwt.sign(sessionAdminUser,config.jwt.SECRET,{expiresIn:'1h'});
        return res.cookie(config.jwt.COOKIE,token,{maxAge:3600000}).send({status:"success",message:'Logueado'})
    }
    const user = await usersService.getUserByEmail(email);
    if(!user) return res.status(400).send({status:"error",error:"Usuario no existe"});
    const passwordValidation = await isValidPassword(user,password);
    if(!passwordValidation) return res.status(400).send({status:"error",error:"Contraseña incorrecta"});
    const tokenUser ={
        email:user.email,
        role:user.role,
        name:`${user.first_name} ${user.last_name}`,
        id:user._id,
        cart:user.cart
    }
    const token = jwt.sign(tokenUser,config.jwt.SECRET,{expiresIn:'1h'});
    res.cookie(config.jwt.COOKIE,token,{maxAge:3600000}).send({status:"success",message:"Logueado"})
}
export default {
    register,
    login
}