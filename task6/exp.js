const express = require('express')


const app= express()

app.get('/',(req,res)=>{
    res.type('html').send('<h1>Home<h1/>')
})

app.get('/html',(req,res)=>{
    res.type('html').send('<h1>html<h1/>')
})

app.get('/json',(req,res)=>{
    res.type('json').send({message:'hello'})
})

app.get('/text',(req,res)=>{
    res.type('text').send('plain text')
})

app.use((req,res)=>{
    res.state(404).send({message:"not page"})
})

app.listen(2000,(req,res)=>{
    console.log('listinign to 3000')
})