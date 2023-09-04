import React from "react";
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'

export default function Navbar(prop) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${prop.navMode} bg-${prop.navMode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{prop.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/About">{prop.about}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Link</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled">Disabled</Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

            <div className={`form-check form-switch text-${prop.navMode === "light" ? "dark" : "light"}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={prop.toggle} />
              <label className="form-check-label" for="flexSwitchCheckDefault" > DARKMODE </label>
            </div>
          </div>
        </div>
      </nav>

      {/* hello this is chitresh mouryas component  */}
    </div>
  )
}

Navbar.propTypes = {

  // title: PropTypes.string  it takes the props for title of only string types 
  title: PropTypes.string.isRequired // it is necessary to pass prop of string type for title other wise it will show error in console 

}

// Navbar.defaultProps={
//   title:"this is default title"
// }