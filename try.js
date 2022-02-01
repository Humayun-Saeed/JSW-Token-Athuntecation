var mongose=require('mongoose')
var express=require('express')
var user=require('./schema')
var jsw=require('jsonwebtoken')
var connection=require('./connection')

var app=express()
app.use(express.json())
var secret_key='pak'
app.post('/sighnup',(req,res)=>{

const a=new user()
a.name=req.body.name
a.email=req.body.email
a.password=req.body.password

a.save().then((data)=>{
    console.log(data);

})
.catch((err) => {
    console.log(err);
})})
app.post('/sighnin',async(req,res)=>{
    const data=await user.findOne({password:req.body.password})
if(data){
    console.log("logged in:");
}
const token=await jsw.sign({data},secret_key)
console.log(token);




})
app.post('/users',async(req,res)=>{
    var token=req.body.token
   // console.log(token);
    const verf=await jsw.verify(token,secret_key)
    console.log(verf);
})

app.listen(3000,()=>{
    console.log("server is runnig at the port: ");
})