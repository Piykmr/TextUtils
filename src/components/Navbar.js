import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
 

    return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><h1>{props.websiteName}</h1></Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"><h5>Home</h5></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/About"><h5>About Us</h5></Link>
        </li>
      </ul>
    </div>
  <button type="button" className="btn btn-light" onClick={props.toggleMode}>{props.dMode}</button>

  </div>
</nav>
      </>
    )
}
