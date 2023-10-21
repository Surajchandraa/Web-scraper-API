const express = require('express');
const app = express();
app.use(express.json())
const {paragraph,title,links,images, description, keywords}=require('./web_scrap');


app.post('/title',(req,res)=>{
    let data=req.body.url
    title(data,res)
})


app.post('/paragraph',(req,res)=>{
    let data=req.body.url;
    paragraph(data,res)
})

app.post('/links',(req,res)=>{
    let data=req.body.url;
    links(data,res)
})

app.post('/images',(req,res)=>{
    let data=req.body.url;
    images(data,res)
})

app.post('/description',(req,res)=>{
    let data=req.body.url;
    description(data,res)
})

app.post('/keywords',(req,res)=>{
    let data=req.body.url;
    keywords(data,res)
})

app.post('*',(req,res)=>{
    res.send("page not found");
})

module.exports=app
