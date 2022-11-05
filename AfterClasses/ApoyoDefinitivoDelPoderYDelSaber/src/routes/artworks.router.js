import { Router } from 'express';
import artworksController from '../controllers/artworks.controller.js';

import uploader from '../services/uploader.js';

const router = Router();

router.post('/',uploader.single('image'),artworksController.createArtwork);

export default router;