import { Router } from 'express';
import userModel from '../dao/user.dao.js';
import { createHash, isValidPassword } from '../utils.js';
import jwt from 'jsonwebtoken';
import MailingService from '../services/mailing.js';
const router = Router();

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const exists = await userModel.findOne({ email });
    if (exists) return res.status(400).send({ status: "error", error: "User Already exists" });
    let user = {
        name,
        email,
        password: createHash(password)
    };
    let result = await userModel.create(user);
    res.send({ status: "success", payload: result })
})


router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).send({ status: "error", error: "User doesn't exist" });
    if (!isValidPassword(user, password)) return res.status(400).send({ status: "error", error: "Invalid password" });
    res.send({ status: "success", message: "Logueado" });
})

router.post('/recover', async (req, res) => {
    const { email } = req.body;
    const recoveryToken = jwt.sign({ email }, 'C0derConQuesito', { expiresIn: 300 });
    const mailer = new MailingService();
    let result = await mailer.sendSimpleMail({
        from: 'CoderRecuperacionesFelices',
        to: 'mauricioespinosaflores25@gmail.com',
        subject: 'Cambio de contraseña',
        html: `<div>
        <h1>Solicitud de reestablecimiento de contraseña</h1>
        <p>Ya que es bobo y perdió su contraseña, puede reestablecerla</p>
        <a href="http://localhost:8080/restore?tkn=${recoveryToken}">ENTRANDO A ESTE LINK</a>
        </div>`
    })
    console.log(result);
    res.send({ status: "success", message: "Recibió correo de reestablecimiento" })
})

router.put('/restore', async (req, res) => {
    console.log(req.body);
    try {
        let { password, token } = req.body;
        let { email } = jwt.verify(token, 'C0derConQuesito');
        let user = await userModel.findOne({ email });
        console.log(user);
        if (!user) return res.status(404).send({ status: "error", error: "Email not found" });
        user.password = await createHash(password);
        console.log(user);
        let result = await userModel.findByIdAndUpdate(user._id, { $set: { password: user.password } });
        res.send({ status: "success", message: "password changed" })
    } catch (error){
        if(error.expiredAt){
            return res.send({status:"error", error:"Token expirado, generar nuevamente"})
        }else{
            console.log(error);
        }
    }
})
export default router;