const mongoose=require("mongoose")

const contactSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true
  },
  name:{
      type:String,
      required:true
  },
  phone:{
      type:String,
      required:true
  },
  message:{
      type:String,
      required:true
  }
})

const Model1=new mongoose.model("ContactBakcend",contactSchema);

module.exports=Model1;