const express=require("express");
const app=express();
require("./connection")
const cors=require("cors")
const Model=require("./model");
const Model1=require("./modelcon");
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
    const email=req.body.email
    const result= await Model.findOne({email:email})
    console.log(result)
    if(result==null){
    
     const employee=new Model({
         name:req.body.name,
         email:req.body.email,
         password:req.body.password,
         cpassword:req.body.cpassword,
         remember:req.body.remember
     })
     const result= await employee.save()
     res.send("Yes")
     console.log(result);
}
else
{
    res.send("no");
}
}
   catch(err){
       res.status(400).send(err);
   }
})

app.post("/sign",async(req,res)=>{
    try{
    const email=req.body.email;
    const password=req.body.password;
    // console.log(password)
    const result = await Model.findOne({email:email});
    // console.log(result)
    if(result==null){
        res.send("yn")
    }
    else if(result.password===password){
        res.send("yes")
 }
    else{
        res.send("no")
    }
    }
    catch(err){
        console.log(err);
    }
})

app.post("/contact",async(req,res)=>{
    try{
    const email=req.body.email
    const check = await Model.findOne({email:email});
    if(check==null){
        res.send("no")
    }
    else{
     const result=new Model1({
         email:req.body.email,
         name:req.body.name,
         phone:req.body.phone,
         message:req.body.message
     })
    const cont= await result.save();
    console.log(cont)
    res.send("yes")
     
    }
}
    catch(err){
        res.status(400).send(err);
    }
 })

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})