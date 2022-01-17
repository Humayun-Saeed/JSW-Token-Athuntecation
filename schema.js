var mongoose=require('mongoose')

var user=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    pasword:{type:String}
})

module.exports=mongoose.model('person',user)
