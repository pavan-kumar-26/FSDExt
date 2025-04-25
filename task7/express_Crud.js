const { urlencoded } = require('body-parser')
const express = require('express')
let i=2
const app = express()
app.use(express.json())
app.use(urlencoded())

let users=[
   { id:1,
    name:'abc'},
    {
        id:2,
        name:'def'
    }

]
app.get('/',(req,res)=>{
    res.json(users)
})

app.post('/',(req,res)=>{
    const {name}=req.body
    const newObj ={id:++i,name:name}
    users.push(newObj)
    res.json(users)
})

app.put('/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    console.log(id)
    const {name}=req.body
    let user = users.find(u=>u.id===id)
    if(!user){res.status(400).json({message:'User not found'})}
    users.name=name
    res.json(user)
})

app.delete('/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const user=users.find(u=>u.id===id)
    if(!user){res.status(400).json({message:'not found'})}
    users.splice(id,1)
    res.json(users)
})

app.listen(3000,(req,res)=>{
    console.log("lisiting to 3000")
})