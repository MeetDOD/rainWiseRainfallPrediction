import React, { useEffect, useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import '../styles/navbar.css'
import { Link } from "react-router-dom"
import logo from '../assets/logo.png'

const Navbar = () => {

    const [color, setcolor] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 30) {
            setcolor(true)
        } else {
            setcolor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    useEffect(() => {
        const navBar = document.querySelectorAll(".nav-link");
        const navCollapse = document.querySelector(".navbar-collapse.collapse");

        const handleNavClick = () => {
            navCollapse.classList.remove("show");
        };

        navBar.forEach((a) => {
            a.addEventListener("click", handleNavClick);
        });

        return () => {
            navBar.forEach((a) => {
                a.removeEventListener("click", handleNavClick);
            });
        };
    }, []);
    return (
        <header className={color ? 'header_wrapper header-scrolled' : 'header_wrapper'}>
            <nav className="navbar navbar-expand-lg fixed-top px-4">
                <div className="container-fluid justify-content-between align-items-center">
                    <Link to='/' className="navbar-brand">
                        <img src={logo} style={{ width: '150px' }} />
                    </Link>
                    <button className="navbar-toggler pe-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <BiMenuAltRight size={35} />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav menu-navbar-nav">
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page">Home</a>
                                </li>
                            </Link>
                            <Link to='/stat' style={{ textDecoration: 'none' }}>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page">View Statistics</a>
                                </li>
                            </Link>
                            <Link to='/states' style={{ textDecoration: 'none' }}>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page">Indian States</a>
                                </li>
                            </Link>
                        </ul>
                        <ul className='mt-2 text-center'>
                            <Link to='/states' style={{ textDecoration: 'none' }} className="nav-item text-center">
                                <a className="nav-link learn-more-btn btn-extra-header" aria-current="page">Predict Rainfall</a>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
