import React from "react"

const Team=(props)=>{
return(
    <div className={props.className}>
                <div className="card border-light" style={{width:"15rem"}}>
                    <img src={props.img} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
    </div>
)
};
export default Team;