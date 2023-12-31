import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                {/* navbar-expand-lg */}
                <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" style={{height:"70px",boxShadow:"0px 0px 20px grey"}}>
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">NewsMonkeys</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink> </li>
                                <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
                                <li className="nav-item"> <NavLink className="nav-link" to="/business">Business</NavLink></li>
                                <li className="nav-item"> <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink> </li>

                                <li className="nav-item"> <NavLink className="nav-link" to="/health">Health</NavLink> </li>
                                <li className="nav-item"> <NavLink className="nav-link" to="/science">Science</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/sports">Sports</NavLink> </li>
                                <li className="nav-item"><NavLink className="nav-link" to="/technology">Technology</NavLink></li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
// business
// entertainment
// general
// healthscience
// sports
// technology
export default NavBar