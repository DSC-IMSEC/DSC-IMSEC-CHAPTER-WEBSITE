import React from "react";
import '../components/css/Event.css';


const Event = () => {
    return (
        <>
            <div className="row d-flex flex-column mx-5">
                <div className="col-lg-10 col-sm-10 mb-3 mx-5">
                    <h1 className="display-5 text-primary">Our Events</h1>
                    <h6>Questions? Please Conatact @gmail.com</h6>
                </div>
                <div className="col-lg-10 col-sm-10 mx-5 mb-5">
                    <h1 className="display-5">Our <strong className="text-primary">Features Event</strong> & <strong className="text-primary">Meetup</strong></h1>
                    <h6>Events are listed in reverse chronological order by date.</h6>
                </div>
                <div className="col-lg-4 col-sm-4 mx-5">
                    <div class="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
                        <div class="card-body">
                            <h5 class="card-title">Dark card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and 
                            make up the bulk of the card's content.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="conatoiner mx-5 my-5">
                <div className="list-example1 d-flex flex-row mx-5">
                    <div id="list-example" class="list-group col-4">
                        <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
                        <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
                        <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
                        <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
                    </div>
                    <div id="classheight" data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example col-8">
                        <h4 id="list-item-1">Item 1</h4>
                        <p>Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua id magna ullamco eu. Do aute ipsum i
                        psum ullamco cillum 
                        consectetur ut et aute conse
                        ctetur labore. Fugiat laboru
                        m incididunt tempor eu consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in. Aliqua et 
                        aliqua officia quis et incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt mollit dolore. Aliquip nul
                        la enim veniam non fugiat id cupidatat nulla elit cupidatat commodo v
                        elit ut eiusmod cupidatat elit dolore.</p>
                        <h4 id="list-item-2">Item 2</h4>
                        <p>m incididunt tempor eu consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in. Aliqua et 
                        aliqua officia quis et incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt mollit dolore. Aliquip nul
                        la enim veniam non fugiat id cupidatat nulla elit cupidatat commodo v</p>
                        <h4 id="list-item-3">Item 3</h4>
                        <p>m incididunt tempor eu consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in. Aliqua et 
                        aliqua officia quis et incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt mollit dolore. Aliquip nul
                        la enim veniam non fugiat id cupidatat nulla elit cupidatat commodo v</p>
                        <h4 id="list-item-4">Item 4</h4>
                        <p>m incididunt tempor eu consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in. Aliqua et 
                        aliqua officia quis et incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt mollit dolore. Aliquip nul
                        la enim veniam non fugiat id cupidatat nulla elit cupidatat commodo v</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Event;