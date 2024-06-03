import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse ,faBars} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return (
        <>
            <nav className="navbar shadow navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="public/images/home/logo.png" alt="" />
                </a>
                <FontAwesomeIcon icon={faBars} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  className="me-4 d-lg-none d-md-block" style={{ fontSize: '20px', cursor:"pointer" }} aria-expanded="false" aria-label="Toggle navigation" />

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className='nav-link active' to="/hero">Home</Link> 
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link active' to="/about">About</Link> 
                    </li>
                    <li className="nav-item">
                     <Link className='nav-link' to="/footer">Footer</Link>
                    </li>
                </ul>
                
                </div>
            </div>
            </nav>
        </>
    );
};

export default Navbar;