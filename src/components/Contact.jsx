import React, { Component } from "react";
import insta from "../images/insta.svg";
import twitter from "../images/twitter.svg";


class Contact extends Component{
  render(){
    return (
      <>
        <div className="my-5 ">
          <h1 className="text-center display-3">Contact US</h1>
        </div>
        <div className="container contact_div  p-5 mb-5" style={{borderWidth:"4px"}}>
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form action="http://localhost:3001/contact" method="POST">
                <div class="form-group mb-3">
                  <label for="exampleFormControlInput1">Email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" name="email" placeholder="name@example.com" />
                </div>
                <div class="form-group mb-3">
                  <label for="exampleFormControlInput1">Full Name</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" name="name" placeholder="Enter Your Name" />
                </div>
                <div class="form-group mb-3">
                  <label for="exampleFormControlInput1">Phone Number</label>
                  <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" placeholder="mobile number" />
                </div>
                <div class="form-group mb-3">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" name="message" rows="3"></textarea>
                </div>
                <button class="btn btn-primary mb-3" type="submit">Submit form</button>
              </form>
            </div>
          </div>
          
  
        </div>
      </>
    )
  }
}

export default Contact;