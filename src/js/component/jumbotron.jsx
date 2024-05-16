import React from "react";


const jumbotron = () =>{
    return (
        <>
            <div className="container-fluid bg-secondary bg-opacity-25 mt-1">
                <div className="p-5 mb-4  rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                        <p className="col-md-8 fs-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <button className="btn btn-primary btn-lg" type="button">Call to Action!</button>
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default jumbotron;