import React from 'react';
import './Navbar.css';
import logo from '../../../logos/Logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <img className="main__logo" src={logo} alt=""/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-5 manubar__fonts" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 manubar__fonts" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 manubar__fonts" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 manubar__fonts" href="#">Concerns</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 manubar__fonts" href="#">Event</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 manubar__fonts" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <button type="button" class="  mr-5 btn btn-success login__btn ">Login</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;