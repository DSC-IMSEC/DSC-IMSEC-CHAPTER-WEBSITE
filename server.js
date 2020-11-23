const express = require('express');
//const env=express('dotenv');
const app = express();
const bodyParser = require("body-parser");
const engine = require("express-engine-jsx");
const path=require('path');
const nodemailer=require("nodemailer");

//env.config();

// app.get('/',(req,res,next)=>{
//   res.status(200).json({
//     message:'Hello From Server'
//   });

// });
//view engine setup

app.set('view engine', 'jsx');
app.engine('jsx', engine());
//static folder
app.use('/src',express.static(path.join(__dirname,'src')));
//body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
  res.send('Hello From Server');

});
app.get('/',(req,res)=>{
  res.render('contact.jsx');

});
app.post('/send',(req,res)=>{
  const output=`
     <p>You have a new cotact request</p>
     <h3> Contact Details</h3>
     <ul> 
       <li>Name: ${req.body.name}</li>
       <li>Email: ${req.body.email}</li>
       <li>Number: ${req.body.number}</li>
       
     </ul> 
     <h3>Message</h3>
     <p>${req.body.message}</p>
     let transporter=nodemailer.createTransport({
       host:'dscimsec@gmail.com',
       port:587,
       secure:false,
       auth:{
         user:'Developer Student Clubs IMSEC',
         pass:'deathnote03'
       }
     });
     //setup mail data with unicode symbols
     var mail = {
      from: name,
      to: 'dscimsec@gmail.com', 
      subject: 'New Message from Contact Form',
      text: content
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })
     `;



});
app.listen(5000,()=>{
  console.log(' Server is running on port ');
});
