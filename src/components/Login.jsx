import React, { Component } from "react";
import axios from "axios";
import "././css/login.css";
import Sign from "../components/signin"

class Login extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      password: "",
      cpassword: "",
      remember: ""
    }
    this.showpass = this.showpass.bind(this)
    this.changeName = this.changeName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.changeCpassword = this.changeCpassword.bind(this)
    this.changeRemember = this.changeRemember.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  showpass(e) {
    var x = document.getElementById("inputPassword3");
    var y = document.getElementById("yes");
    if (y.className === "no") {
      y.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" id="show"  width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
        </svg>`
      y.className = "yes"
      x.type = "password"
    }
    else {
      y.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" id="show" width="16" height="16" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
            <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.027 7.027 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.088z"/>
            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6l-12-12 .708-.708 12 12-.708.707z"/>
          </svg>`
      y.className = "no"
      x.type = "text"

    }

  }
  changeName(e) {
    document.getElementById('label1').innerHTML = "";
    document.getElementById('label2').innerHTML = "";
    document.getElementById('label3').innerHTML = "";
    document.getElementById('label4').innerHTML = "";
    this.setState({
      name: e.target.value
    })
  }
  changeEmail(e) {
    document.getElementById('label1').innerHTML = "";
    document.getElementById('label2').innerHTML = "";
    document.getElementById('label3').innerHTML = "";
    document.getElementById('label4').innerHTML = "";
    this.setState({
      email: e.target.value
    })
  }
  changePassword(e) {

    document.getElementById('label1').innerHTML = "";
    document.getElementById('label2').innerHTML = "";
    document.getElementById('label3').innerHTML = "";
    document.getElementById('label4').innerHTML = "";
    this.setState({
      password: e.target.value
    })
  }
  changeCpassword(e) {
    document.getElementById('label1').innerHTML = "";
    document.getElementById('label2').innerHTML = "";
    document.getElementById('label3').innerHTML = "";
    document.getElementById('label4').innerHTML = "";
    this.setState({
      cpassword: e.target.value
    })
  }
  changeRemember(e) {
    this.setState({
      remember: e.target.value
    })

  }
  async onSubmit(event) {
    event.preventDefault();
    const registered = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      cpassword: this.state.cpassword
    }
    if (registered.name === "") {
      document.getElementById('label1').innerHTML = "Can't be empty"
    }
    else if (registered.email === "") {
      document.getElementById('label2').innerHTML = "Can't be empty"
    }
    else if (registered.password === "") {
      document.getElementById('label3').innerHTML = "Can't be empty"
    }
    else if (registered.cpassword === "") {
      document.getElementById('label4').innerHTML = "Can't be empty"
    }
    else if (registered.password.length < 6) {
      document.getElementById("label3").innerHTML = "Password must be 6 char long";
      this.setState({
        password: "",
        cpassword: ""
      })

    }
    else if (registered.password != registered.cpassword) {
      document.getElementById("label4").innerHTML = "Pass must be same"
      this.setState({
        cpassword: ""
      })
    }
    else if (registered.email !== "") {
      if (!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(registered.email))) {
        document.getElementById("label2").innerHTML = "Invalid Email";
        this.setState({
          email: "",
          password: "",
          cpassword: ""
        })
      }
      else {
        const res = await axios.post("http://localhost:3001/login", registered);
        if (res.data == "no") {
          document.getElementById("label2").innerHTML = "email already taken";
          this.setState({
            email: "",
            password: "",
            cpassword: ""
          })
        }
        else {
          this.setState({
            name: "",
            email: "",
            password: "",
            cpassword: "",
          })
          alert("You are registered successfully")
        }
      }

    }

  }

  render() {
    return (
      <>
        <div className="container-fluid p-4 d-flex justify-content-center">
          <div className="row">

            <div className="col-lg-5 col-md-7 col-sm-7 mx-auto my-5" style={{ border: "5px solid blue", backgroundColor: "black", fontSize: "20px" }}>
              <form onSubmit={this.onSubmit} >
                <div className="p-2 text-primary mx-5"  >
                  <div className="input-group  mt-5 mb-4">
                    <span className="input-group-text" id="basic-addon1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                      </svg>
                    </span>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" onChange={this.changeName} onClick={this.changeName} value={this.state.name} aria-describedby="basic-addon1" />
                  </div>
                  <label id="label1" style={{ fontSize: "18px" }}></label>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" onClick={this.changeEmail} onChange={this.changeEmail} value={this.state.email} aria-describedby="basic-addon2" />
                    <span className="input-group-text" id="basic-addon2">@example.com</span>
                  </div>
                  <label id="label2" style={{ fontSize: "18px" }}></label>
                  <div className="row mb-2">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-12 input-group">
                      <input type="password" className="form-control" onChange={this.changePassword} onClick={this.changePassword} value={this.state.password} id="inputPassword3" placeholder="password" />
                      <span className="input-group-text bg-white" id="notshow">
                        <div className="yes" id="yes" onClick={this.showpass}>
                          <svg xmlns="http://www.w3.org/2000/svg" id="show" onClick={this.showpass} width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                          </svg>
                        </div>
                      </span>
                    </div>
                  </div>
                  <label id="label3" style={{ fontSize: "18px" }}></label>
                  <div className="row mb-2">
                    <label for="confirmPassword3" className="col-sm-5 col-form-label">Confirm Password</label>
                    <div className="col-12">
                      <input type="password" className="form-control" onChange={this.changeCpassword} onClick={this.changeCpassword} value={this.state.cpassword} id="confirmPassword3" placeholder="confirm password" />
                    </div>
                  </div>
                  <label id="label4" style={{ fontSize: "18px" }}></label>
                  <button className="btn btn-primary  my-5" type="submit">Sign Up</button>
                </div>
              </form>
            </div>


            <div className="col-lg-5 col-md-7 col-sm-7 p-5 mx-auto my-5" style={{ border: "5px solid blue", backgroundColor: "black", fontSize: "20px", height: "82vh" }} >
              <Sign />
            </div>

          </div>
        </div>
      </>
    )
  }
}

export default Login;