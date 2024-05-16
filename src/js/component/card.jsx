import React from "react";
import Image from "../../img/imagen.png"
const card = () =>{
    return(
         <div>
            <div className="card">
                <img src={Image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <button className="btn btn-primary" type="button">Find Out More!</button>
                </div>
            </div>
         </div>
        
    )
}
export default card;