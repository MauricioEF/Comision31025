import { Router } from "express";
import sessionsController from "../controllers/sessions.controller.js";
import { uploader } from "../utils.js";

const router = Router();

router.post('/register',uploader.single('avatar'),sessionsController.register)

export default router;