const express = require('express')
const path = require('path')

const app =express()

app.set('view engine','ejs')
app.set('views',path.join(__dirname))


const users=[
    {
        id:1,
        name:'abc'
    },
    {
        id:2
,
name:"abc"  
  }
]

app.get('/users',(req,res)=>{
    res.render('users',{users})
})

app.listen(3001,(req,res)=>{
    console.log("listinign to 3001")
})