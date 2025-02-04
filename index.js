const express = require('express')
const mongoose = require('mongoose')
const app=express()
const port=3000

app.use(express.json())
app.use(express.static('static'))

app.get('/',(req,res)=>{
    res.send("Hey..")
})

app.listen(port,()=>{
    console.log('Server is running on http://localhost:$(port)')
})