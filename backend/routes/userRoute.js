const express=require("express");

const dotenv=require("dotenv")
dotenv.config();

// const bodyParser = require('body-parser');
// router.use(bodyParser.json());
const user=require("../models/UserModel")

const router=express.Router();

//get all data
router.get("/",async(req,res)=>{
    try {
        const AllData=await user.find({})
        res.status(200).json(AllData)
    } catch (error) {
        res.send(400).json({error:error.message})
    }
    
})

//create data
router.post("/",async(req,res)=>{
    const {name,email,age}=req.body;
    try {
        const UserData=await user.create({
            name,email,age
        })
        res.status(201).json(UserData)
    } catch (error) {
        res.send(400).json({error:error.message})
    }
    
})

//get single user
router.get("/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        const SingleUser=await user.findById({_id:id})
        res.status(200).json(SingleUser);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

//delete User

router.delete("/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        const to_be_Delete=await user.findByIdAndDelete(id)
        res.status(200).json(to_be_Delete);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

//Patch or Update

router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    
    try {
        const updatedUser = await user.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports=router