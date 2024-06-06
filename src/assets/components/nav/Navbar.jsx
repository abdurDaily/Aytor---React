import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faMagnifyingGlass, faHeart, faBagShopping} from '@fortawesome/free-solid-svg-icons';





const Navbar = () => {
    const [dark, setDark]  = useState(false);
    useEffect(()=>{
        let nav = document.querySelector('.navbar');
        let initial = 0 ;
        window.addEventListener('scroll',function(){
            // console.log(nav);
          if(window.scrollY < initial){
               
               nav.classList.add('nav_active');
            }else{
                nav.classList.remove('nav_active');
            }
          let current = window.scrollY;
          initial = current;
        });
    }, [])

    const toggleDarkMode = () => {
        setDark(!dark)
        document.querySelector('html').dataset.bsTheme=dark?'light':'dark'
    }


    return (
        <>
            <nav className="navbar shadow navbar-expand-lg" style={{ background:'#fff' }}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="public/images/home/logo.png" alt="" />
                </a>

                <div className="me-4 d-lg-none d-md-block mobile" >
                    <ul className='test'>
                        <li className='shop'>   
                            <span>0</span>
                            <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                        </li>
                    </ul>
                </div>
                
                <FontAwesomeIcon icon={faBars} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  className="me-4 d-lg-none d-md-block" style={{ fontSize: '20px', cursor:"pointer" }} aria-expanded="false" aria-label="Toggle navigation" />

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto ">
                    <li className="nav-item">
                        <Link className='nav-link active' to="/hero">Home</Link> 
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/about">About</Link> 
                    </li>
                    
                    <li><button onClick={toggleDarkMode} className='btn btn-dark'>Dark Mode</button></li>
                </ul>


                <ul className='test d-none d-lg-block'>
                    
                    <li ><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                    <li><FontAwesomeIcon icon={faHeart} /></li>
                    <li className='shop'>   
                           <span>0</span>
                           <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                    </li>
                </ul>
                
                </div>
            </div>
            </nav>


            <div className="search-box">
                <h1>search</h1>
            </div>
        </>
    );
};

export default Navbar;