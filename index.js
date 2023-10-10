const express=require('express');
const cors=require('cors');
const data=require('./data.json');
const app=express()
const port=3000;
app.use(cors());
app.get('/',(req,res)=>{
    res.send('hello world!')
})
app.get('/data',(req,res)=>{
 res.send(data);
})
app.get('/data/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    const response = data.items;
    console.log('i want to see request id',id)
    const product= response.find(products=>products.id ===id) || {};
    
    res.send(product)

    res.send()
})
app.listen(port,()=>{
    console.log(`apps listening on port:${port}`)
})