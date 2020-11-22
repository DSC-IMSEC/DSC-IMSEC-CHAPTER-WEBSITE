import React from "react";
import {NavLink} from "react-router-dom";

const Login=()=>{
return(
    <div className="container px-4">
  <div className="row gx-5">
    <div class="col">
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
    <div className="col ">
      <div className="p-3 border border-dark bg-primary text-light">
      <div className="input-group mb-3 my-5" >
  <span className="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3 my-5">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span className="input-group-text" id="basic-addon2">@example.com</span>
</div>
  <div className="row mb-3 my-5">
    <label for="inputPassword3" class="col-sm-2 col-form-label ">Password</label>
    <div className="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div className="row mb-3 my-5">
    <label for="confirmPassword3" class="col-sm-2 col-form-label">Confirm Password</label>
    <div className="col-sm-10">
      <input type="password" class="form-control" id="confirmPassword3"/>
    </div>
  </div>
  <div className="col-12 my-5">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="inlineFormCheck"/>
      <label className="form-check-label" for="inlineFormCheck">
        Remember me
      </label>
    </div>
  </div>
  <div className="col-12 my-5">
    <button className="btn btn-dark my-2" type="submit">Sign Up</button>
  </div>
      </div>
    </div>
  </div>
</div>
)
}

export default Login;