const router = require('express').Router();
const productController = require('../controllers/ProductController');
router.post("/product", productController.createProduct);
router.get("/product", productController.getAllProducts);
router.get('/product/:status',productController.getProductByStatus)
router.get("/productbyqty/:qty", productController.getProductByQtyFilter);
router.get("/productfilter",productController.filterProduct)
module.exports = router;

