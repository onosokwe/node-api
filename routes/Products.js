const express = require('express')
const products = express.Router()
const cors = require('cors')

const Products = require('../models/Products')
products.use(cors())

products.post("/create", (req, res) => {
    const today = new Date()
    const productData = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        pid: req.body.pid,
        status: req.body.status,
        created_on: today
    }

    Products.findOne({
        where: {
            pid: req.body.pid
        }
    })
    .then(product => {
        if(!product){
            Products.create(productData)
            .then(product => {
                res.json({status: product.name + ' created successfully'})
            })
            .catch(err => {
                res.send('error: ' + err)
            })
        } else {
            res.json({error: 'Product already exists'})
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

products.post("/fetch", (req, res) => {
    Products.findAll({
        where: {
            status: req.body.status
        }
    })
    .then(items => {
        if(items){
            res.json({items: items})
        } else {
            res.status(400).json({error: 'No product found...'})
        }
    })
    .catch(err => {
        res.status(400).json({error: err})
    })
})

module.exports = products