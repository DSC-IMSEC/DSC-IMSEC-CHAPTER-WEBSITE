import React, { Component } from "react";
import axios from "axios";


class Contact extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      name: "",
      phone: "",
      message: ""
    }
    this.changemail = this.changemail.bind(this)
    this.changename = this.changename.bind(this)
    this.changephone = this.changephone.bind(this)
    this.changemessage = this.changemessage.bind(this)
    this.onsubmit = this.onsubmit.bind(this)
  }
  changemail(e) {

    document.getElementById('lab1').innerHTML = "";
    document.getElementById('lab2').innerHTML = "";
    document.getElementById('lab3').innerHTML = "";
    document.getElementById('lab4').innerHTML = "";
    this.setState({
      email: e.target.value
    })
  }
  changename(e) {

    document.getElementById('lab1').innerHTML = "";
    document.getElementById('lab2').innerHTML = "";
    document.getElementById('lab3').innerHTML = "";
    document.getElementById('lab4').innerHTML = "";
    this.setState({
      name: e.target.value
    })
  }
  changephone(e) {

    document.getElementById('lab1').innerHTML = "";
    document.getElementById('lab2').innerHTML = "";
    document.getElementById('lab3').innerHTML = "";
    document.getElementById('lab4').innerHTML = "";
    this.setState({
      phone: e.target.value
    })
  }
  changemessage(e) {

    document.getElementById('lab1').innerHTML = "";
    document.getElementById('lab2').innerHTML = "";
    document.getElementById('lab3').innerHTML = "";
    document.getElementById('lab4').innerHTML = "";
    this.setState({
      message: e.target.value
    })
  }
  async onsubmit(e) {
    e.preventDefault();
    const mssge = {
      email: this.state.email,
      name: this.state.name,
      phone: this.state.phone,
      message: this.state.message
    }
    if (mssge.email === "") {
      document.getElementById("lab1").innerHTML = "Can't be empty";
    }
    else if (mssge.name === "") {
      document.getElementById("lab2").innerHTML = "Can't be empty";
    }
    else if (mssge.phone === "") {
      document.getElementById("lab3").innerHTML = "Can't be empty";
    }
    else if (mssge.message === "") {
      document.getElementById("lab4").innerHTML = "Can't be empty";
    }
    else if (isNaN(mssge.phone)) {
      document.getElementById("lab3").innerHTML = "Enter numeric value only";
      this.setState({
        phone: "",
        message: ""
      })
    }
    else {
      this.setState({
        email: "",
        name: "",
        phone: "",
        message: ""
      })
      const res = await axios.post("http://localhost:3001/contact", mssge)
      if (res.data == "yes") {
        alert("Your response has been succesfully submitted");

      }
      else {
        alert("Plzz registerd Your self first")

      }

    }
  }

  render() {
    return (
      <>
        <div className="container-fluid p-5">
          <h1 className="text-center display-3">Contact US</h1>

          <div className="container contact_div  p-5 mb-5" style={{ borderWidth: "4px" }}>
            <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={this.onsubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" name="email" onChange={this.changemail} onClick={this.changemail} value={this.state.email} placeholder="name@example.com" />

                  </div>
                  <label id="lab1"></label>
                  <div className="form-group mb-3">
                    <label htmlFor="exampleFormControlInput1">Full Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" name="name" onChange={this.changename} onClick={this.changename} value={this.state.name} placeholder="Enter Your Name" />

                  </div>
                  <label id="lab2"></label>
                  <div className="form-group mb-3">
                    <label htmlFor="exampleFormControlInput1">Phone Number</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" onChange={this.changephone} onClick={this.changephone} value={this.state.phone} placeholder="mobile number" />
                  </div>
                  <label id="lab3"></label>
                  <div className="form-group mb-3">
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" name="message" onChange={this.changemessage} onClick={this.changemessage} value={this.state.message} rows="3"></textarea>
                  </div>
                  <label id="lab4"></label>
                  <button className="btn btn-primary mb-3" type="submit">Submit form</button>
                </form>
              </div>
            </div>


          </div>
        </div>
      </>
    )
  }
}

export default Contact;