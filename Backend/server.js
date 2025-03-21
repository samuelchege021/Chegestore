
import express from 'express'
// import db from ''
import dotenv from 'dotenv'
import connectDb from './config/db.js';
// import products from './data/products.js';
import { notfound,errorhandler } from './errormiddleware.js';
import colors from "colors"

import route from './Router/productRoute.js'

dotenv.config({ path: "./Backend/.env" });
connectDb();

// const express = require('express');
// const cors = require('cors');

// const products = require("./data/products");

const app = express();

// Enable CORS before routes




// app.use(cors({
//     origin: "http://localhost:3000" // Fix typo
// }));

 app.get('/', (req, res) => {
   res.send("API is running");
 });
``
// app.get('/api/products', (req, res) => {
//     res.json(products);
// });

app.use('/api/products',route)

// app.get('/api/products/:id', (req, res) => {
//     const product = products.find(prod => prod.id === parseInt(req.parzams.id));

//     if (!product) {
//         return res.status(404).json({ message: 'Product not found' });
//     }

//     res.json(product);
// });

app.use(notfound);
app.use(errorhandler);

const PORT=process.env.PORT||5000;



app.listen(  PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode port ${PORT}` .bold.cyan.underline   );
});
