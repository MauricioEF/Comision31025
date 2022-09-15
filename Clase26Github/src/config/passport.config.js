import passport from "passport";
import local from 'passport-local';
import userService from "../models/User.js";
import { createHash, isValidPassword } from "../utils.js";
import GithubStrategy from 'passport-github2';

const LocalStrategy = local.Strategy;

const initializePassport = () =>{
    passport.use('register',new LocalStrategy({passReqToCallback:true,usernameField:"email"},
    async(req,email,password,done)=>{
        try{
            const {name} = req.body;
            if(!name||!email||!password) return done(null,false,{message:"Incomplete values"})
            //¿El usuario ya está en la base de datos?
            const exists = await userService.findOne({email:email});
            if(exists) return done(null,false,{message:"User already exists"})
            //Insertamos en la base
            const newUser = {
                name,
                email,
                password:createHash(password)
            }
            let result = await userService.create(newUser);
            //SI TODO SALIÓ BIEN EN LA ESTRATEGIA
            return done(null,result)
        }catch(error){
            done(error)
        }
    }))

    passport.use('login',new LocalStrategy({usernameField:'email'},async(email,password,done)=>{
        if(!email||!password) return done(null,false,{message:"Incomplete values"})
        let user = await userService.findOne({email:email});
        if(!user) return done(null,false,{message:"Incorrect credentials"})
        if(!isValidPassword(user,password)) return done(null,false,{message:"Incorrect password"});
        return done(null,user);
    }))

    passport.use('github',new GithubStrategy({
        clientID:'Iv1.346594b984b1aa0a',
        clientSecret:'243e0a4981434df3d72b57265ae1004d26aa2108',
        callbackURL:'http://localhost:8080/api/sessions/githubcallback'
    },async(accessToken,refreshToken,profile,done)=>{
        //Extraer datos del profile
        const {name,email} = profile._json;
        //¿Existe en la base?
        let user = await userService.findOne({email:email});
        if(!user){ //Debo crearlo :)
            let newUser = {
                name,
                email,
                password:'',
            }
            let result = await userService.create(newUser);
            return done(null,result);
        }else{//Sí encontró al usuario
            return done(null,user);
        }
    }))

    passport.serializeUser((user,done)=>{
        done(null,user._id)
    })
    passport.deserializeUser(async(id,done)=>{
        let result = await userService.findOne({_id:id})
        return done(null,result);
    })
}

export default initializePassport;