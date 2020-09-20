import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbarr from '../components/navbar'
import { Link } from "gatsby"
import { useSiteMetadata } from './../utils/use-site-metadata'


export default function Project() {

    const { menuLinks } = useSiteMetadata()
    console.log(menuLinks)
    return (            
        <div>
            <Container>
                <Navbarr/>
                <h2>ddd</h2>
                {menuLinks.map((project, index) => (
        <p key={index}>Hello, {project.name} from {project.link}!</p>
    ))}
            </Container>            
        </div>
    )
}