import React from "react";
const AboutNav=()=>{
    return (
        <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
                                    <a className="navbar-brand" href="#">DSC IMSEC</a>
                                    <ul className="nav nav-pills">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#fat">@fat</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#mdo">@mdo</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                                            <ul className="dropdown-menu dropdown-menu-right">
                                                <li><a className="dropdown-item" href="#one">one</a></li>
                                                <li><a className="dropdown-item" href="#two">two</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#three">three</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
    )
}
export default AboutNav;