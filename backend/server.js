const express=require("express");
const app=express();
const dotenv=require("dotenv")
dotenv.config();

const userRoute=require("./routes/userRoute")

const bodyParser = require('body-parser');
app.use(bodyParser.json());


const mongoose=require("mongoose")
// const user=require("./models/UserModel")



mongoose.connect(process.env.URI).then(()=>{
    
app.listen(process.env.PORT||8000,()=>console.log("connected successfully"))
}).catch((error)=>{
    console.log("not connected",error);
})

// app.get("/",async(req,res)=>{
//     try {
//         const AllData=await user.find({})
//         res.status(200).json(AllData)
//     } catch (error) {
//         res.send(400).json({error:error.message})
//     }
    
// })

// app.post("/",async(req,res)=>{
//     const {name,email,age}=req.body;
//     try {
//         const UserData=await user.create({
//             name,email,age
//         })
//         res.status(201).json(UserData)
//     } catch (error) {
//         res.send(400).json({error:error.message})
//     }
    
// })
app.use(userRoute);