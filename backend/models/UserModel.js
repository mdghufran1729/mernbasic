const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    age:{type:Number},
    
},{timestamps:true})

const user=mongoose.model("user",UserSchema)

module.exports = user;
