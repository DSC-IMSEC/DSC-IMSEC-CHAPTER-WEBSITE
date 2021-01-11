import React from "react";
import web from "../images/landing.svg";
import { NavLink } from "react-router-dom";

const MyContent = () => {
    return (
        <>
            <div className="row mx-auto ">
                <div className="col-lg-6 col-md-6 col-sm-6 p-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column display-5">
                    <h1>Grow Your Knowledge With <strong className="brand-name text-primary">DSC IMSEC CLUB</strong></h1>
                    <h2 className="my-3">We are the team of talented developer making websites</h2>
                    <div className="mt-3">
                        <NavLink to="/login" className="btn-get-started">Get Started</NavLink>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-5 order-1 ">
                    <img src={web} className="img-fluid animated" alt="home img" />

                </div>
            </div>
            
        </>
    )
}
export default MyContent;
