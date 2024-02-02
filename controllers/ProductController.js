const productModel = require("../models/ProductModel");

const createProduct = async (req, res) => {
  try {
    const savedProduct = await productModel.create(req.body);
    res.status(201).json({
      message: "Product Created",
      flag: 1,
      data: savedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find().populate("category");
    res.status(200).json({
      message: "Products Fetched",
      flag: 1,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const getProductByStatus = async (req, res) => {
    console.log(req.params.status);
  try {
    const products = await productModel.find({ status: req.params.status }).populate("category");
    res.status(200).json({
      message: "Products Fetched",
      flag: 1,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const getProductByQtyFilter = async (req, res) => {


    //100
    try{
        //const products = await productModel.find({qty:{$gt:req.params.qty}})
        const products = await productModel.find({qty:{$lte:req.params.qty}}).populate("category")
        res.status(200).json({
            message: "Products Fetched",
            flag: 1,
            data: products,
        })

    }catch(error){

        res.status(500).json({
            message: "Server Error",
            flag: -1,
            data: error,
        })
    }

}
module.exports = {
  createProduct,
  getAllProducts,
    getProductByStatus,
    getProductByQtyFilter
};
