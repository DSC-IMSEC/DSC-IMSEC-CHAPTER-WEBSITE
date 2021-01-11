import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
              <span className="navbar-brand text-primary " style={{ fontWeight: "bold" }} >DSC IMSEC</span>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <NavLink activeClassName='menu-active' exact className="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName='menu-active' exact className="nav-link" to="/team">Team</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName='menu-active' exact className="nav-link" to="/Event">Event</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName='menu-active' exact className="nav-link" to="/about">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName='menu-active' exact className="nav-link" to="/contact">Contact</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName='menu-active' exact className="nav-link" to="/login">Login</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName='menu-active' exact className='nav-link' to="../Dashboard/layout">Profile</NavLink> 
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;