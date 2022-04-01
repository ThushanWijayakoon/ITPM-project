import React from 'react'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">THE ART SHOP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Drawings</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About us</a>
        </li>
        
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
          <button type="button" class="btn btn-danger">Login</button>
          <button type="button" class="btn btn-warning">Sign in</button>
          
</div>
      </ul>
    </div>
  </div>
</nav>

    
  )
}

export default Navbar