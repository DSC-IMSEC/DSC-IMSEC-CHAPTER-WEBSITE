import React from "react";
import insta from "../images/insta.svg";
import twitter from "../images/twitter.svg";


const Contact = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center display-3">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Full Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Phone Number</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="mobile number" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button class="btn btn-primary" type="submit">Submit form</button>
            </form>
          </div>
        </div>
        <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center flex-column">
                <h3 className="display-5">Follow on</h3>
                <div>
                <img src={twitter} alt="h"/>
                <img src={insta} alt="h"/>
                </div>
            </div>
        </div>

      </div>
    </>
  )

};

export default Contact;