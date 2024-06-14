const express = require('express')
const app = express()

app.set("view engine", "ejs")

const data = [
    {id: 1, model: "toyota", price: 234324},
    {id: 2, model: "mercedes", price: 2308},
    {id: 3, model: "prius", price: 23432432589}
]

app.get("/cars", (req,res)=>{
    res.render("car", {data: data})
})

app.get("/", (req,res)=>{
    res.send("<h1>Home Page</h1>")
})

app.listen(3000, ()=>{
    console.log("App is started")
})