const router = require('express').Router();
const uploadController = require('../controllers/UploadController');
router.post("/upload", uploadController.fileUpload);
router.get("/allService", uploadController.getAllService);
module.exports = router;
