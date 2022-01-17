var mongoose=require('mongoose')
var express=require('express')
var jsw=require('jsonwebtoken')
var user=require('./schema')
var mogno=require('./connection.js')

const app=express()
app.use(express.json())
var secret_key='pak'


app.post('/signup',(req,res)=>{
const co=new user()
co.name=req.body.name
co.email=req.body.email
co.password=req.body.password

co.save().then((data)=>{
    console.log(data);
})
.catch((err) => {
console.log(err);    
})
})
app.post('/signin',async(req,res)=>{

    const data=await user.findOne({email:req.body.email})
    if(data){
       const token=await jsw.sign({data},secret_key)
       console.log(token);
    }
})
app.get('/users',async(req,res)=>{
    var token=req.body.token
    const verf=await jsw.verify(token,secret_key)
    console.log(verf);
})

app.listen(9000,()=>{
    console.log("connecte to the server success fully");
})




    

