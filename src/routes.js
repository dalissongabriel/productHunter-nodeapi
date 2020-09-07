const express = require('express')
const routes = express.Router();
const ProductController = require('./controllers/ProductController')

routes
    .get('/products',ProductController.index)
    .get('/products/:id',ProductController.show)
    .post('/products',ProductController.store)
    .put('/products/:id',ProductController.update)
    .delete('/products/:id',ProductController.destroy)

module.exports = routes