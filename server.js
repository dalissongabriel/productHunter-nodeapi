const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const app = express()
mongoose.connect('mongodb://localhost:1234/node-api',{ useNewUrlParser: true, useUnifiedTopology: true }) 

requireDir('./src/models')

const Product = mongoose.model('Product');



app.get('/',(req,res)=>{
    Product.create({
        title: 'React Native',
        description: 'Build native apps with react native',
        url: 'https://github.com/facebook/react-native'
    })
    return res.send('Olá Mundo!')
})

app.listen(3000,()=>{
    console.log("Servidor está rodando em: http://localhost:3000")
})