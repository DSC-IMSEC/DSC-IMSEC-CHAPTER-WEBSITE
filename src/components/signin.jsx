import React, { Component } from "react";
import '../components/css/Signin.css';
import axios from "axios"

class Login extends Component {
  constructor(){
    super()
    this.state = {
      email: "",
      password: ""
    }
    this.showpass = this.showpass.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  showpass(e) {
    var x = document.getElementById("Password3");
    var y = document.getElementById("yes1");
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
  changeEmail(e) {
    document.getElementById('label5').innerHTML = "";
    document.getElementById("label6").innerHTML = "";
    this.setState({
      email: e.target.value
    })
  }
  changePassword(e) {
    document.getElementById("label5").innerHTML = "";
    document.getElementById("label6").innerHTML = "";
    this.setState({
      password: e.target.value
    })
  }
  async onSubmit(event) {
    event.preventDefault();
    const login = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(login)
    if (login.email === "") {
      document.getElementById('label5').innerHTML = "Can't empty";
      this.setState({
        password: ""
      })

    }
    else if (login.password === "") {
      document.getElementById('label6').innerHTML = "Can't empty";
    }
    else {
      let res = await axios.post("http://localhost:3001/sign", login);
      console.log(res.data);
      if (res.data === "yn") {
        this.setState({
          email: "",
          password: ""
        })
        document.getElementById('label5').innerHTML = "User not found";
      }
      else if (res.data === "yes") {
        this.setState({
          email: "",
          password: ""
        })
        window.location.href = "/";

      }
      else {
        this.setState({
          password: ""
        })
        document.getElementById('label6').innerHTML = "Invalid password";

      }
    }

  }

  render() {
    return (
      <>
        <div className="container-fluid">
          <form onSubmit={this.onSubmit} >
            <div className="form text-primary p-5 mt-5 mx-5 " >
              <div className="form-group" >
                <label for="exampleFormControlInput1">Email</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                      <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                    </svg>
                  </span>
                  <input type="email" class="form-control" id="exampleFormControlInput1" name="email" onClick={this.changeEmail} onChange={this.changeEmail} value={this.state.email} placeholder="Enter Your Email" />
                </div>
                <label id="label5" style={{ color: "red" }}></label>
              </div>

              <div className="form-group">
                <label for="exampleFormControlInput1">Password</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-compass-fill" viewBox="0 0 16 16">
                      <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z" />
                    </svg>
                  </span>
                  <input type="password" className="form-control" id="exampleFormControlInput1" onClick={this.changePassword} onChange={this.changePassword} value={this.state.password} name="password" placeholder="password" id="Password3" />
                  <span className="input-group-text bg-white" id="notshow">
                    <div className="yes" id="yes1" onClick={this.showpass}>
                      <svg xmlns="http://www.w3.org/2000/svg" id="show" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                      </svg>
                    </div>
                  </span>
                </div>
                <label id="label6" style={{ color: "red" }}></label>
              </div>
              <button className="btn btn-primary" type="submit">Login</button>
            </div>
          </form>
        </div>
      </>
    )
  }
}
export default Login;