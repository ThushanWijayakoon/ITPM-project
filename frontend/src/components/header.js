import React from "react";




function Header() {

    return(

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
                <a className="navbar-brand fw-bold fst-italic fs-2" href="#" style={{color:"#25D366"}}>Serendib Explorers</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">

                <ul className="navbar-nav">
                    
                    <li className="nav-item">
                    
                       
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active fs-6 " aria-current="page" href="http://localhost:3000/Home">Home</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link fs-6" href="#">Packages</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link fs-6" href="#">Destinations</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link fs-6" href="#">Hotels</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link fs-6" href="#">Events</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link fs-6" href="/all">Guides</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link fs-6" href="http://localhost:3000/add">Transport</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link fs-6" href="#">Shops</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link fs-6" href="log" style={{color:"#25D366"}}>Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fs-6" href="add" style={{color:"#25D366"}}>Signin</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link fs-6" href="profile" style={{color:"#25D366"}}>Profile</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Header;