import React from 'react'
import navbarStyle from './navbar.module.css'
import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'gatsby'
// import Nav from 'react-bootstrap/Nav'

export default function Navbarr() {
    
    // const [hover,setHover] = useState(false)

    // const toogleHover = () => {
    //     setHover(!hover)
    // }

    // const hoverStyle = {borderBottom: '3px solid black'}
    // const antiHover = {borderBottom: 'none'}


    return(
        <div>
            <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={`${navbarStyle.nav} ml-auto justify-content-end nav-link`}>
                <Link className={`${navbarStyle.navText} navText nav-link`} to='/'>Home</Link>
                 {/* <Nav.Link style={antiHover} onMouseEnter={toogleHover} onMouseLeave={toogleHover} className={`${navbarStyle.navText} navText`} href="index">Home</Nav.Link> */}
                <Link className={`${navbarStyle.navText} navText nav-link`} to="/project/">Project</Link>
                <Link className={`${navbarStyle.navText} navText nav-link`} to='/about/'>About</Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}