const express = require('express');
const env=express('dotenv');
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path=require('path');
const nodemailer=require("nodemailer");

//env.config();

// app.get('/',(req,res,next)=>{
//   res.status(200).json({
//     message:'Hello From Server'
//   });

// });
//view engine setup
app.engine('handlerbars',exphbs());
app.set('view engine','handlerbars');
//static folder
app.use('/style',express.static(path.join(__dirname,'style')));
//body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
  res.send('Hello From Server');

});
app.listen(5000,()=>{
  console.log(' Server is running on port ');
});
