import React from "react";
import map from "../images/map.jpg";

const Header = () => {
  return (
    <>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleDark" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleDark" data-slide-to="1"></li>
          <li data-target="#carouselExampleDark" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="10000">
            <img src={map} className="d-block" alt="..." />
            <div className="carousel-caption  d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div className="carousel-item" data-interval="2000">
            <img src={map} class="d-block w-100" alt="..." />
            <div className="carousel-caption  d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={map} class="d-block w-100" alt="..." />
            <div className="carousel-caption  d-md-block">
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleDark" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleDark" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden"></span>
        </a>
      </div>
    </>
  )
}
export default Header;