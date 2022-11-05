import { Router } from 'express';
import viewsController from '../controllers/views.controller.js';
import { executePolicies, privateValidation, publicValidation } from '../middlewares/auth.js';

const router = Router();


router.get('/',privateValidation,viewsController.home);
router.get('/register',publicValidation,viewsController.register);
router.get('/login',publicValidation,viewsController.login);
router.get('/artworkcreator',privateValidation,executePolicies(['ADMIN']),viewsController.artworkCreator);

export default router;