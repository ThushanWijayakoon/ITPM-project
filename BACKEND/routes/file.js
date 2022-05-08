const express = require("express");;
const routerf = express.Router();
const uploadFile = require('../controllers/fileController.js');
const upload = require('../middleware/imageUpload');
const deleteFile = require('../controllers/fileController.js');

routerf.post('/', upload.single('file'), uploadFile);
routerf.delete('/:id', deleteFile);

module.exports = routerf;