import React, { Component } from "react";
import '../components/css/Signin.css';

class Login extends Component{
 
  render(){
    return(
      <>
        <div class="sign">
    <form action="http://localhost:3001/sign" method="POST">
  <div class="form-group">
    <label for="exampleFormControlInput1">Email</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" name="email" placeholder="Enter Your Email"/>
  </div>
  
  <div class="form-group">
    <label for="exampleFormControlInput1">Password</label>
    <input type="password" class="form-control" id="exampleFormControlInput1" name="password" placeholder="password"/>
  </div>
  <button class="btn btn-primary" type="submit">Login</button>
</form>
        </div>
      </>
    )
  }
}
export default Login;