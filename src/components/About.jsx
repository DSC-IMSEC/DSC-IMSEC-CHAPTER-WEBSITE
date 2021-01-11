import React from "react";
import '../components/css/About.css';
import AboutNav from "../components/AboutNav";
import AboutContent from "../components/AboutContent";
import AboutHeader from "../components/Aboutheader"


const About=()=> {
        return (
            <>
                <section id="header" className="d-flex align-item-center flex-column">
                    <AboutHeader/>
                    <div className="container">
                        <div className="row">
                            <div id="navbar-example" className="mb-5">
                                <AboutNav/>
                                <AboutContent/>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }

export default About;