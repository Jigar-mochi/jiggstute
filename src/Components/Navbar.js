import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import easyedit from './easyedit.png'

export default function Navbar(props) {

    return (
        <>
            <nav className={`navbar text-${props.mode === "light" ? "dark" : "light"} navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <img src={easyedit} alt="" style={{ width: "3rem" }}></img>
                    <Link className="navbar-brand" to="/"><h2>EditEasy</h2></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                            <input className="form-check-input" onClick={props.toggleall} type="checkbox" role="switch" id="flexSwitch" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><strong>{props.btn}</strong></label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    About: PropTypes.string
}

Navbar.defaultProps = {
    title: "JDC",
    About: "About-Us"
};