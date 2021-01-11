import React from "react";
import web from "../images/img3.svg";
const AboutHeader=()=>{
    return (
        <>
        <div className="header">
                <h1 className="text-capitalize text-center">about us</h1>
                <hr className="w-25 mx-auto"/>
                    </div>
                    <div className="container">
                        <div className="row my-2">
                            <div className="col-lg-6 col-md-6 col-12 col-xxl-6 ">
                                <figure>
                                    <img src={web} alt="HUm tum" className="img-fluid about_img"/>
                                </figure>
                            </div>

                            <div className="col-lg-6 col-md-6 col-12 col-xxl-6 d-flex flex-column justify-content-center align-center " id="img_animay">
                                <h1>My Journey</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ratione quaerat repellendus explicabo tenetur sunt aliquid dolorum debitis sed rerum. Nihil laborum impedit inventore molestiae.</p>
                                <button type="button" className="btn btn-outline-info">Check More</button>
                            </div>
                        </div>

                    </div>
        </>
    )
}
export default AboutHeader;