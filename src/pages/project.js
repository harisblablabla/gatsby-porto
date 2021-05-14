import React, {lazy, Suspense} from 'react'
import {Helmet} from 'react-helmet'
import { Col, Row, Container } from 'react-bootstrap'


export default function Project({data}) {

    const Navbar = lazy( () => import('./../components/navbar'))
    const Footer = lazy( () => import('./../components/footer'))
    const PhotoProject = lazy( () => import('./../components/photo-project'))

    const renderLoader = () => <p>loading</p>

    return(
        <div>
            <Suspense fallback={renderLoader()}>
            <Helmet htmlAttributes={{lang: 'en'}}>
                  <meta charSet="utf-8"/>
                  <meta name="description" content="project from portflio haris fadhilah"/>
                  <meta name="keywords" content="project portfolio haris fadhilah list work" />
                  <meta name="robots" content="index, follow" />
                  <title>Project List</title>
                  <link rel="canonical" href="https://harisfadhilah.com/project/"/>
            </Helmet>
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