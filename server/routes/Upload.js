const express = require('express');
const router = express.Router();

const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'blanco237',
    api_key: '219968633416455',
    api_secret: 'QUP-PekAXZZOrd0Ffkwx5igunoI'
});

router.post('/image', async (req, res) => {
    console.log("Image Upload Request");
    const file = req.files.image;
    if(!file){
        console.log(req);
        return;
    }

    const result = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: "image",
        resource_type: "image"
    })

    res.json(result);
});


router.post('/audio', async (req, res) => {

    console.log("Audio Upload")

    const file = req.files.audio;
    if (!file) {
        console.log(req);
        return;
    }
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: "audio",
        resource_type: "video"
    });

    res.json(result);
})






module.exports = router;