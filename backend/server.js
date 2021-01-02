const express=require("express");
const app=express();
require("./connection")
const cors=require("cors")
const Model=require("./model");
const Model1=require("./modelcon");
const axios=require("axios")
const port=process.env.PORT ||3001

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Welcome to Home page");
})
app.get("/login",(req,res)=>{
    res.send("Welcome  to Login page")
})
app.get("/sign",(req,res)=>{
    res.send("Welcome to Sign in page")
})
app.get("/contact",(req,res)=>{
    res.send("Welcome to contact")
})

app.post("/login",async(req,res)=>{
   try{
    const password=req.body.password
    const cpassword=req.body.cpassword
    if(password===cpassword){
     const employee=new Model({
         name:req.body.name,
         email:req.body.email,
         password:req.body.password,
         cpassword:req.body.cpassword,
         remember:req.body.remember
     })
     const result= await employee.save()
     console.log(result);
    }  
    else{
        res.send("password not match")
    }
   }
   catch(err){
       res.status(400).send(err);
   }
})

app.post("/sign",async(req,res)=>{
    try{
    const email=req.body.email
    const password=req.body.password
    console.log(password)
    const result = await Model.findOne({email:email});
    // console.log(result)
    if(result.password===password){
        console.log("welcome")
        res.send("welcome")
    }
    else{
        res.send("Password is invalid")
    }
    }
    catch(err){
        console.log(err);
    }
})

app.post("/contact",async(req,res)=>{
    try{
     const result=new Model1({
         email:req.body.email,
         name:req.body.name,
         phone:req.body.phone,
         message:req.body.message
     })
    const cont= await result.save();
    res.send(cont)
     
    }
    catch(err){
        res.status(400).send(err);
    }
 })

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})