import React, { /*useState*/ } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark "> {/*bg-body-tertiary*/}
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="/">{props.title}</a> */}
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/">{props.aboutText}</a> */}
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="https://github.com/Samya-S/TextUtils" target='black'>Our Source Code</Link>
            </li>
          </ul>

          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary" type="submit">Search</button> success: green, primary: blue, danger: red
          </form> */}

          {props.mode === 'dark' &&
          <div className="btn-group mx-2" role="group" aria-label="Basic radio toggle button group" >
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onChange={props.changeBgColor}/>
            <label className="btn btn-outline-primary" htmlFor="btnradio1">Blue</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onChange={props.changeBgColor}/>
            <label className={`btn btn-outline-${props.mode==='light'?'dark':'light'}`} htmlFor="btnradio2">Black</label> {/*style={{backgroundColor: '#212529', color: 'white'}}*/}

            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onChange={props.changeBgColor}/>
            <label className="btn btn-outline-success" htmlFor="btnradio3">Green</label>
          </div>}

          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-2`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,  // isRequired checks if undefined (not passed and not set default)
    aboutText: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Default title',
    aboutText: 'Default about text'
}