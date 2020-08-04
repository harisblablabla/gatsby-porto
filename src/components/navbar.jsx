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
                <Nav className="ml-auto justify-content-end">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Project</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}