var express = require('express');
var product = require('./Models/product')
var router = express.Router();


//to fetch movies
router.get('/product',async(req,res)=>{
    const data = await product.find()
    res.send(data)
})

//to add the movies
router.post("/product",async(req,res)=>{
    const data = new product({
        name:req.body.name,
        price:req.body.price
    })

    await data.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})


// api for updating movie

router.patch('/product/:id',async (req,res)=>{
    const data = await product.findOne({_id:req.params.id})
    data.name = req.body.name
    data.price = req.body.price
    await data.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })

})

//delete api

router.delete("/product/:id",async(req,res)=>{
    const _id = req.params.id;
    const data = await product.findByIdAndDelete(_id)
    res.send(data);
})

module.exports = router 