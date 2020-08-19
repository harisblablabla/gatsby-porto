import React from 'react'
import navbarStyle from './navbar.module.css'
import {Navbar,Nav} from 'react-bootstrap'
// import Nav from 'react-bootstrap/Nav'

export default function Navbarr() {
    

    return(
        <div>
            <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={`${navbarStyle.nav} ml-auto justify-content-end nav-link`}>
                <Nav.Link className={`${navbarStyle.navText} navText`} href="index">Home</Nav.Link>
                <Nav.Link className={`${navbarStyle.navText} navText`} href="#link">Project</Nav.Link>
                <Nav.Link className={`${navbarStyle.navText} navText`} href="#link">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}