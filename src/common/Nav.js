import React from 'react'
import {Link} from 'react-router-dom'
import './Common.css'
const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fit-nav">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand fit-nav-logo flex-lg-fill" >Fit & Sexy</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gapping">

        <li className="nav-item">
          <Link className="nav-link fit-nav active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fit-nav"  to="/Tools">Tools</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle fit-nav" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Workouts
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item fit-nav"  to="/UpperBody">Upper Body</Link></li>
            <li><Link className="dropdown-item fit-nav" to="/LowerBody">Lower Body</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item fit-nav" to="/Cardio">Cardio</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link fit-nav" to="/AboutUs">About Us</Link>
        </li>
      </ul>
      <form className="d-flex">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <button className="btn btn-outline-success fit-nav"  type="submit"><Link to="/Login">LogIn</Link></button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav
