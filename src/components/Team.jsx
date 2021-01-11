import React from "react";
import web from "../images/PRADUMN.jpg";
import Team1 from "./MemberCard"; 
import rob from "../images/sample.svg";


const Team=()=>{
return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-6">
            <p className="display-3 my-5 mx-5">The Team
                <h1>Presenting board of 2020-21</h1>
            </p>
        </div>
        <div className="col-6">
        <img src={rob} alt="Hum"/>
        </div>
        </div>
        <div className="row my-5 p-5 border-dark border-bottom">
            <h1 className="text-center display-4 mb-5">The Board</h1>
            <Team1 className="col-12 d-flex justify-content-center align-items-center" img={web}/>
        </div>
        <div className="row my-5 p-5 border-dark border-bottom">
            <h1 className="text-center display-4 my-5 ">Technical Team</h1>
            <Team1 className="col-3 d-flex justify-content-center align-items-center" img={web}/>
            <Team1 className="col-3 d-flex justify-content-center align-items-center" img={web}/>
            <Team1 className="col-3 d-flex justify-content-center align-items-center" img={web}/>
            <Team1 className="col-3 d-flex justify-content-center align-items-center" img={web}/>
        </div>
        <div className="row my-5 p-5 border-dark border-bottom" >
            <h1 className="text-center display-4 my-5 ">Management Team</h1>
            <Team1 className="col-3 d-flex justify-content-center align-items-center" img={web}/>
            <Team1 className="col-3 d-flex justify-content-center align-items-center" img={web}/>
            <Team1 className="col-3 d-flex justify-content-center align-items-center" img={web}/>
            <Team1 className="col-3 d-flex justify-content-center align-items-center" img={web}/>
        </div>
        <div className="row my-5 p-5 border-dark border-bottom" >
            <h1 className="text-center display-4 my-5 ">Design Team</h1>
            <Team1 className="col-4 d-flex justify-content-center align-items-center" img={web}/>
            <Team1 className="col-4 d-flex justify-content-center align-items-center" img={web}/>
            <Team1 className="col-4 d-flex justify-content-center align-items-center" img={web}/>
        </div>
        <div className="row my-5 d-flex justify-content-center align-items-center">
            <h1 className="text-center display-4 my-5 ">Social Team</h1>
            <Team1 className="col-3 d-flex justify-content-center align-items-center" img={web}/>
            <Team1 className="col-3 d-flex justify-content-center align-items-center" img={web}/>
        </div>
    </div>
    </>
)
};
export default Team;