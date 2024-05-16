import React from "react";

const navBar = () =>{
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fs-6">
                <div className="container">
                    <div className="d-flex justify-content-end">
                        <a className="navbar-brand " href="#">Start Bootstrap</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                <div className="collapse navbar-collapse m-2 d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </>
    )
}
export default navBar;