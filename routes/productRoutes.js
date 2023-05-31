const express = require('express')
const router = express.Router()
const {adminGetProducts, adminDeleteProduct, adminCreateProduct, adminUpdateProduct,getProductById } = require("../controllers/productController")

router.get("/get-one/:id", getProductById)
router.get("/admin", adminGetProducts)
router.delete("/admin/:id", adminDeleteProduct)
router.put("/admin/:id", adminUpdateProduct)
router.post("/admin", adminCreateProduct)

module.exports = router