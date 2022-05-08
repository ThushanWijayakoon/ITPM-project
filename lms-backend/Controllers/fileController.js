import express from "express";

const router = express.Router();

export const uploadFile = async(req, res) => {
    try {
        if (req.file.path) {
            return res.status(201).send(req.file.path)
        } else {
            return res.status(400).send('File Upload Error')
        }
    } catch (error) {
        return res.status(500).send('File Upload Error')
    }
}

export const deleteFile = async(req, res) => {
    try {
        console.log(req);
        return res.status(200).send('File Deleted')
    } catch (error) {
        return res.status(500).send('File Delete Error')
    }
}

export default router;