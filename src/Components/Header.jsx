import React, {useRef} from 'react';

import { Container, Row, Col } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import "../../styles/Header.css";

const NavLink = [
    {
        path: "/home",
        display: "Home",
    },

    {
        path: "/about",
        display: "About",
    },

    {
        path: "/blogs",
        display: "Blog",
    },

    {
        path: "/contact",
        display: "Contact",
    },
];

const Header =() =>{
    const menuRef = useRef(null);

    const toggleMenu = () => menuRef.current.classList.toggle("menu_active");

    return (
        <header className="header">
            <div className='header_top'>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="6">
                            <div className='header_top_left'>
                                <span>Need Help?</span>
                                <span className='header_top_help'>
                                    <i class="ri-phone-fill"></i>+1-202-555-0149
                                </span>
                            </div>
                        </Col>

                        <Col lg="6" md="6" sm="6">
                            <div className="header_top_right d-flex align-items-center justify-content-end gap-3">
                                <Link to="#" className="d-flex align-items-center gap-1">
                                    <i class="ri-login-circle-line"></i> Login
                                </Link>

                                <Link to="#" className='d-flex align-items-center gap-1'>
                                    <i class="ri-user-line"></i>Register
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='header_middle'>
                <Container>
                    <Row>
                    <Col lg="4" md="3" sm="4">
                        <div className='logo'>
                            <h1>
                                <Link to="/home" className='d-flex align-items-center gap-2'>
                                    <i class="ri-car-line">
                                        <span>
                                            Rent Car <br/> Service
                                        </span>
                                    </i>
                                </Link>
                            </h1>
                        </div>
                    </Col>


                    <Col lg="4" md="3" sm="4">
                            <div className='header_location d-flex align-items-center gap-2'>
                                <span>
                                    <i class="ri-earth-line"></i>
                                </span>
                                <div className='header_location-content'>
                                    <h4>Bangladesh</h4>
                                    <h6>Sylhet City, Bangladesh</h6>
                                </div>
                            </div>
                        </Col>

                        <Col
                         lg="2"
                         md="3"
                         sm="0"
                         className='d-flex align-items-center justify-content-end'>
                            <button className='header_btn btn'>
                                <Link to="/contact">
                                    <i class="ri-phone-line"></i> Request a call
                                </Link>
                            </button>
                         </Col>
                    </Row>
                </Container>
            </div>


            <div className='main_navbar'>
                <Container>
                    <div className='navigation_wrapper d-flex align-items-center justify-content-between'>
                        <span className='mobile_menu'>
                            <i class="ri-menu-line" onClick={toggleMenu}></i>
                        </span>

                        <div className='navigation' ref={menuRRef} onClick={toggleMenu}>
                            <di className="menu">
                                {navLinks.map((item, index)=>(
                                    <NavLink
                                    to={item.path}
                                    className={(navClass) =>
                                        navClass.isActive ? "nav_active nav_item" : "nav_item"
                                    }
                                    key={index}>
                                        {item.display}
                                    </NavLink>
                                ))}
                            </di>
                        </div>

                        <div className='nav_right'>
                            <div className='search_box'>
                                <input type='text' placeholder='Search'/>
                                <span>
                                    <i class ="ri-search-line"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    )
}
