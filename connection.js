var mongoose=require('mongoose')

const mongo=mongoose.connect("mongodb+srv://Humayun-Saeed:s12345678@cluster0.p48xj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then((data)=>{
console.log("connected to the database successfully: ");
})
.catch((err) => {
console.log(err);    
})
module.exports=mongo