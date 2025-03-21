// import dotenv from 'dotenv';
// import express from 'express';
// import Product from '../model/productModel.js'
// import asyncHandler from 'express-async-handler';

// dotenv.config();

// const router = express.Router();

// // Get all products
// router.get('/', asyncHandler(async (req, res) => {
//     const products = await Product.find({});
//     res.json(products);
// }));

// // Get a single product by ID
// router.get('/:id', asyncHandler(async (req, res) => {
    
//     try {
//         const product = await Product.findById(req.params.id);
//         if (product) {
//             res.json(product);
//         } else {
//             res.status(404).json({ message: "Product not found" });
//         }
//     } catch (error) {
//         res.status(500).json({ message: "Server error: " + error.message });
//     }
// })); 

// export default  router;

import dotenv from 'dotenv';
import express from 'express';
import Product from '../model/productModel.js';
import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose'; // Add this import

dotenv.config();

const router = express.Router();

// Get all products
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
}));

// Get a single product by ID
router.get('/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    
    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid product ID format" });
    }

    try {
        const product = await Product.findById(id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error: " + error.message });
    }
}));

export default router;