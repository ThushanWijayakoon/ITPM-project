import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid dangers">
    <a className="navbar-brand " href="#">THE ART SHOP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Drawings</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About us</a>
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
        
        {/* <div className="btn-group" role="group" aria-label="Basic mixed styles example">
          <button type="button" className="btn btn-danger button1">Login</button>
          <button type="button" className="btn btn-warning button1">Sign up</button> */}
          
{/* </div> */}
      </ul>
    </div>
  </div>
</nav>

    
  )
}

export default Navbar