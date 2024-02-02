const router = require('express').Router();
const productController = require('../controllers/ProductController');
router.post("/product", productController.createProduct);
router.get("/product", productController.getAllProducts);
router.get('/product/:status',productController.getProductByStatus)
router.get("/productbyqty/:qty", productController.getProductByQtyFilter);
module.exports = router;

