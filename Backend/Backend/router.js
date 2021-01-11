const express=require("express");
const router=express.Router();
const Model=require("./model");

router.post("/login",async(req,res)=>{
    try{

        if(password===cpassword){
            const employee=new Model({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                cpassword:req.body.cpassword,
                remember:req.body.remember
            })
            const restered=await employee.save();
            res.status(201).send("You are sign up")
        }
        else{
            res.send("password not match")
        }
        
    }
    catch(err){
        res.status(400).send(err);
    }
})

// router.post("/sign",async(req,res)=>{
//     try{
//         const email=req.body.email;
//         const password=req.body.password;
//         const result=await Model.findOne({email:email});
//         if(password===result.password){
//             res.send("Welcome to Imsec");
//         }
//         else{
//             res.send("Password is not matching");
//         }
//     }
//     catch(e){
//         res.status(400).send(e);
//     }

// })

module.exports=router;