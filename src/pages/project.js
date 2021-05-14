import React, {lazy, Suspense} from 'react'
import { Col, Row } from 'react-bootstrap'
import Container from "react-bootstrap/Container"



export default function Project({data}) {

    const Navbar = lazy( () => import('./../components/navbar'))
    const Footer = lazy( () => import('./../components/footer'))
    const PhotoProject = lazy( () => import('./../components/photo-project'))

    const renderLoader = () => <p>loading</p>

    return(
        <div>
            <Suspense fallback={renderLoader()}>
            <Container>
                <Navbar/>
                <Row className={`justify-content-center mt-5`}>
                    <Col md={10} className={`px-4`}> 
                        <PhotoProject/>  
                    </Col>
                </Row>
            </Container>
            <Footer/>
            </Suspense>
        </div>
    ) 
}