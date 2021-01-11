const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Dscbackend",{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
.then(()=>{
    console.log("connction is successful");
})
.catch(err=>{
    console.log(err);
})