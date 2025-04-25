const express= require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { urlencoded } = require('body-parser')

const app = express()

app.use(express.json())
app.use(urlencoded({extended:true}))

mongoose.connect('mongodb://localhost:27017/crud').then(()=>{
    console.log("connected to db")
})

const sk='your_jwt_sk'

const schema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const User = mongoose.model('User',schema)


app.post('/signup',async (req,res)=>{
    const{name,email,password}=req.body;
    const existing = await User.find({email})
    if(existing){res.status(400).json({msg:'user already exists'})}

    const user = new User({
        name,
        email,
        password
    })
    if(!user){res.status(400).json({msg:'failed creating user'})}
    await user.save()
    res.status(200).json(user)

})

app.post('/login',async(req,res)=>{
    const{email,password}=req.body;
    const existing = await User.findOne({email})
    if(!existing){res.status(400).json({msg:'user doesnot exists'})}
    console.log(password,existing.password)
    if(!(existing.password===password)){res.status(400).json({msg:'failed password'})}
    const token= jwt.sign({email},sk,{expiresIn:'1h'})
    res.status(200).json({msg:'Success'})


})

app.get('/:id',async(req,res)=>{
    const user = await User.findById(req.params.id)
    res.json({msg:user})
})

app.listen(3010,(req,res)=>{
    console.log('listining to 3010')
})