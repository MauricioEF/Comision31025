import { ROUTES } from "../constants/routes.js";
import { artworkService } from "../services/index.js";

const home = async(req,res)=>{
    const routes = ROUTES[req.user.role];
    const artworks = await artworkService.getArtworks();

    res.render('home',{
        user:req.user,
        routes:routes,
        artworks,
        css:'/css/home.css'
    });
}
const register = (req,res)=>{
    res.render('register');
}
const login = (req,res)=>{
    res.render('login');
}
const artworkCreator = (req,res)=>{
    res.render('artworkCreator')
}
export default {
    artworkCreator,
    home,
    login,
    register
}