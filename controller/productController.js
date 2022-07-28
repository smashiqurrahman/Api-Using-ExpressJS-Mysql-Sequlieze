const res = require('express/lib/response');
const db = require('../models');

const Products = db.products;


// create
const addProduct = async (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: 'Title not found',
        })
        return
    }

    const productInfo = {
        title: req.body.title,
        price: req.body.price,
    }

    try {
        const product = await Products.create(productInfo);
        res.status(200).send(product);
        console.log(product);
    } catch (err) {
        res.status(500).send({
            message: err.message || 'Error occured'
        })
    }
}

// retrieve
const getAllProducts = async (req, res) => {
    const product = await Products.findAll();
    res.status(200).send(product);
    console.log(product);
}

// get single product
const getSingleProduct = async (req, res) => {
    const id = req.params.id;
    const product = await Products.findOne({ where: { id: id } });
    res.status(200).send(product);
}

// update product
const updateProduct = async (req, res) => {
    let id = req.params.id;
    const product = await Products.update(req.body, { where: { id: id }});
res.status(200).send(product);
}

// delete product
const deleteProduct = async (req, res) => {
    const id = req.params.id;
    const product = await Products.destroy({ where: { id: id } });
    res.status(200).send('Product is deleted');
}

const publishedProduct = async (req, res) => {
    const products = await Products.findAll({ where: { published: true } });
    res.status(200).send(products);
}

module.exports = {
    addProduct,
    getAllProducts,
    getSingleProduct,
    deleteProduct,
    updateProduct,
    publishedProduct
}