
const express = require('express')
const router = express.Router();

uploadFile = async(req, res) => {
    try {
        if (req.file.path) {
            return res.status(201).json(req.file.path)
        } else {
            return res.status(400).json('File Upload Error')
        }
    } catch (error) {
        return res.status(500).json('File Upload Error')
    }
},

deleteFile = async(req, res) => {
    try {
        console.log(req);
        return res.status(200).json('File Deleted')
    } catch (error) {
        return res.status(500).json('File Delete Error')
    }
}

module.exports = router;