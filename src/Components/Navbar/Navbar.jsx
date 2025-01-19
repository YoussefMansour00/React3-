import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky top-0 z-2">
  <div className="container-fluid container-md p-4 position-relative">
    <a className="navbar-brand fs-2" href="#">START REACT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <ul className="navbar-nav position-absolute end-0 d-flex justify-content-between">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Portfolio">PORTFOLIO</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="#About">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contactSec">CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
