var mongoose = require('mongoose')
var express = require('express')
var route = require('./route')
var bodyParser =require('body-parser')

mongoose.connect('mongodb://localhost:27017/product').then(()=>{
    console.log('DB Connected....')

    app = express();
    app.use(bodyParser.urlencoded({extended:false}))
    app.use('/api',route)
    
    app.get('/', (req,res)=>{
        res.sendFile('index.html',{root:__dirname})
    })

    app.listen((3000),()=>{
        console.log('server started')
    })
}).catch((e)=>{
    console.log(e.toString())
})