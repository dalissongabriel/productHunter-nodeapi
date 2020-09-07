const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const app = express()

mongoose.connect('mongodb://localhost:1234/node-api',{ useNewUrlParser: true, useUnifiedTopology: true }) 

requireDir('./src/models')


app.use(express.json())
app.use('/',require('./src/routes'))

app.listen(3000,()=>{
    console.log("Servidor está rodando em: http://localhost:3000")
})