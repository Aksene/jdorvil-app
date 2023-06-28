import React, { useState, useEffect } from 'react'
import './Layout.css'
import { Link } from 'react-router-dom'
// import { HashLink } from 'react-router-hash-link';
// import abdousWorld from '../Assets/abdousWorld.png'
// import logo1 from '../Assets/logo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FaTwitter, FaInstagram } from "react-icons/fa";


const Layout = ({children}) => {
    const [showMenu, setShowMenu] = useState(false)
    const closeMobileMenu = () => setShowMenu(false);


    return (
        <div>
            <header className="header">
                <div className={showMenu ? 'menu-icon active' : 'menu-icon'} onClick={() => setShowMenu(!showMenu)}>
                    {
                            showMenu ?
                            <FontAwesomeIcon
                            icon={faXmark}
                            onClick={() => setShowMenu(!showMenu)}
                            /> 
                            :                    
                            <FontAwesomeIcon
                            icon={faBars}
                            onClick={() => setShowMenu(!showMenu)}
                            />
                    }
                </div>
                <div className="header-links_left">
                    <ul className={showMenu ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item" >
                            <Link className={showMenu ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu} to={"/"}>
                                HOME
                            </Link>
                        </li>
                        {/* <li className="nav-item" >
                            <Link className={showMenu ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu} to={"/about-me"}>
                                ABOUT
                            </Link>
                        </li> */}
                        <li className="nav-item" >
                            <Link className={showMenu ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu} to={"/book"}>
                                BOOK ME
                            </Link>
                        </li>
                        {/* <li className="nav-item" >
                            <Link className={showMenu ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu} to={"/blog"}>
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link className={showMenu ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu} to={"/contact-Me"}>
                                Contact Me
                            </Link>
                        </li> */}
                    </ul>
                </div>

                <div className={showMenu ? 'header-image-container_active' : 'header-image-container'}>
                    <Link to={"/"}>
                        <img className={showMenu ? 'header-image active' : 'header-image'} src="/assets/dorvil_logo.png" alt="Dorvil" />
                        {/* <p>J-Dorvil</p> */}
                    </Link>
                </div>



                <div className="header-links_right">
                    <ul className={showMenu ? 'nav-menu active' : 'nav-menu'}>
                        {
                            showMenu ? 
                                <div>
                                    <li className="nav-item" >
                                        <Link className={showMenu ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu} to={"/"}>
                                            HOME
                                        </Link>
                                    </li>
                                    {/* <li className="nav-item" >
                                        <Link className={'nav-links active'} onClick={closeMobileMenu} to={"/about-me"}>
                                            ABOUT
                                        </Link>
                                    </li> */}
                                    <li className="nav-item" >
                                        <Link className={'nav-links active'} onClick={closeMobileMenu} to={"/book"}>
                                            BOOK ME
                                        </Link>
                                    </li>
                                </div>
                            :""
                        }
                        {/* <li className="nav-item" >
                            <Link className={showMenu ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu} to={"/playground"}>
                                PLAYGROUND
                            </Link>
                        </li> */}
                        <li className="nav-item" >
                            <Link className={showMenu ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu} to={"/contact-Me"}>
                                CONTACT ME
                            </Link>
                        </li>
                    </ul>
                </div>

            </header>

            <main className={showMenu ? 'no-scroll' : ''}>
                {children}
            </main>

            <footer>
                <div className="dorvil-logo-bottom-container">
                    <Link to={"/"}>
                        <img className="dorvil-logo-bottom" src="/assets/dorvil_logo.png" alt="DorvilBottom" />
                        {/* J-Dorvil */}
                    </Link>
                </div>
                <div className="footer-links">
                    <div className="footer-overview">
                        <ul>
                            <h3>Overview</h3>
                            <li className="footer-cat_links">
                                <a href="/about-us">
                                        <span>About Me</span>
                                </a>
                            </li>
                            <li className="footer-cat_links">
                                <Link to="/book">
                                        <span>Book Me</span>
                                </Link>
                                
                            </li>
                            <li className="footer-cat_links">
                                <a href="/blog">
                                    <span>Coach's Tips</span>
                                </a>
                            </li>
                            <li className="footer-cat_links">
                                <a href="/blog">
                                    <span>Contact Me</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-links_socials">
                        <ul>
                            <h3>Socials</h3>
                            <li className="footer-cat_links">
                                <a href="/services">
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li className="footer-cat_links">
                                <a href="/services/#goods">
                                    <span>Facebook</span>
                                </a>
                            </li>
                            <li className="footer-cat_links">
                                <div>
                                    <span>Twitter</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-links_contact">
                        <ul>
                            <h3>Contact Information</h3>
                            <li className="footer-cat_links">
                                <strong>Number:</strong> <span> </span>
                                <span>(617) 910-0357 / (617) 230-6716</span>
                            </li>
                            <li className="footer-cat_links">
                                <strong>E-mail:</strong> <span> </span> 
                                <a href="mailto:kembacorp@gmail.com" target="_blank">
                                    <span>coachjdorvil@gmail.com</span>
                                </a>
                            </li>
                            {/* <li className="footer-cat_links">
                                <strong>Address:</strong> <span> </span>
                                <a target="_blank" href="https://www.google.com/maps/search/Government+Center+1+Washington+Mall+Suite,+BOSTON,+MA,+1456/@42.3597232,-71.0619772,17z/data=!3m1!4b1" >
                                    <span>Government Center 1 Washington Mall Suite, BOSTON, MA, 1456 </span>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className="footer-info">
                    <div className="footer-copyright">
                        {/* <p className="footer-copyright-text">© 2023 KEMBA INC, ALL RIGHTS RESERVED.</p> */}
                    </div>
                    <div className="footer-signature">
                        <p className="footer-signature-text"> 
                            Powered by
                        </p>
                        <a href="http://abdous-world.com" target="_blank">
                            <img className="footer-signature-logo" src="/abdousWorld.png" alt="Abdou's World" />
                        </a>

                    </div>
                    <div className="footer-icon-group">
                        <ul>
                            <li>
                                <Link to="//google.com" target='_blank'>
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link to="//twitter.com/" target='_blank'>
                                    <FaTwitter/>
                                </Link>
                            </li>
                            <li>
                                <Link to="//instagram.com/" target='_blank'>
                                    <FaInstagram/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout
