import express from 'express';
const router = express.Router();
import upload from '../Middleware/imageUpload.js';

import  { uploadFile, deleteFile } from '../Controllers/fileController.js';

router.post('/', upload.single('file'), uploadFile);
router.delete('/:id', deleteFile);

export default router;