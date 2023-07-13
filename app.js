const express= require('express')
const mongoose = require('mongoose')

const app= express()
mongoose.connect("mongodb+srv://admin:5hFg7rXsULjnAh6a@cluster0.ni6vsgm.mongodb.net/bookStore?retryWrites=true&w=majority").then(()=>{
  console.log("connected to db")
}).then(()=>{
    app.listen(5000)
}).catch((err)=>{
    console.log(err.message)
})