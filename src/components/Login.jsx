import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

class Login extends Component{
constructor(){
  super()
  this.state={
    name:"",
    email:"",
    password:"",
    cpassword:"",
    remember:""
  }
   this.changeName=this.changeName.bind(this)
   this.changeEmail=this.changeEmail.bind(this)
   this.changePassword=this.changePassword.bind(this)
   this.changeCpassword=this.changeCpassword.bind(this)
   this.changeRemember=this.changeRemember.bind(this)
   this.onSubmit=this.onSubmit.bind(this)
}
  changeName(e){
     this.setState({
       name:e.target.value
     })
    //  console.log(e.target.value)
  }
  changeEmail(e){
    this.setState({
      email:e.target.value
    })
 }
 changePassword(e){
  this.setState({
    password:e.target.value
  })
}
changeCpassword(e){
  this.setState({
    cpassword:e.target.value
  })
  console.log(e.target.value)
}
 changeRemember(e){
  this.setState({
    remember:e.target.value
  })
  // console.log(e.target.value)

}
onSubmit(event){
  event.preventDefault();
  const registered={
    name:this.state.name,
    email:this.state.email,
    password:this.state.password,
    cpassword:this.state.cpassword,
    remember:this.state.remember
  }
  console.log(registered)
  axios.post("http://localhost:3001/login",registered)
  this.setState({
    name:"",
    email:"",
    password:"",
    cpassword:"",
    remember:""
  })
}

render(){
  return (
    <>
    <div className="container px-4">
  <div className="row gx-5">
    <div class="col-lg-6 col-md-6 col-sm-6 my-5">
    {/* div1 */}
     <div className="p-3 border border-dark bg-danger text-white h-100">
     <div className="leftside ">
            <div className="box-1">
                <div className="box-1-2 d-flex text-align-center justify-content-center flex-column">
                <h1>DSC IMSEC</h1>
                <p>Join the community to learn,compete and share resources.Your membership application has been processed,
                 and we are glad to welcome you into the organization.We always welcome new members to the club, and are pleased to have you with us. We want you to feel like a part of the group.</p>
                <h5>Already have an account? <NavLink to="/sign" className="btn-get-started">Sign In</NavLink></h5>
                </div>
            </div>
        </div>
    </div>
    </div>
    {/* div2 */}
    
    <div className="col-lg-6 col-md-6 col-sm-6 my-5">
    <form  onSubmit={this.onSubmit}>
      <div className="p-3 border border-dark bg-primary text-light">
      <div className="input-group mb-3 my-5" >
  <span className="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" onChange={this.changeName} value={this.state.name} aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3 my-5">
  <input type="text" class="form-control" placeholder="Recipient's username"  aria-label="Recipient's username" onChange={this.changeEmail} value={this.state.email} aria-describedby="basic-addon2"/>
  <span className="input-group-text" id="basic-addon2">@example.com</span>
</div>
  <div className="row mb-3 my-5">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" class="form-control" onChange={this.changePassword} value={this.state.password}  id="inputPassword3"/>
    </div>
  </div>
  <div className="row mb-3 my-5">
    <label for="confirmPassword3" class="col-sm-2 col-form-label">Confirm Password</label>
    <div className="col-sm-10">
      <input type="password" class="form-control" onChange={this.changeCpassword} value={this.state.cpassword}  id="confirmPassword3"/>
    </div>
  </div>
  <div className="col-12 my-5">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" onChange={this.changeRemember} value={this.state.remember} id="inlineFormCheck"/>
      <label className="form-check-label" for="inlineFormCheck">
        Remember me
      </label>
    </div>
  </div>
  <div className="col-12 my-5">
    <button className="btn btn-dark my-2" type="submit">Sign Up</button>
  </div>
      </div>
      </form>
    </div>
    
  </div>
</div>
    </>
  )
}
}

export default Login;