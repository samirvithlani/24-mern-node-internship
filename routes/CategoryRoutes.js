const categoryController = require('../controllers/CategoryController');
const router = require('express').Router();
router.post("/category", categoryController.createCategory);
router.get("/category", categoryController.getCategories);
module.exports = router;
