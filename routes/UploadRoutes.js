const router = require('express').Router();
const uploadController = require('../controllers/UploadController');
router.post("/upload", uploadController.fileUpload);
module.exports = router;
