import React, {lazy, Suspense} from 'react'
import {Helmet} from 'react-helmet'
import { Col, Row, Container } from 'react-bootstrap'


export default function Project({data}) {

    const Navbar = lazy( () => import('./../components/navbar'))
    const Footer = lazy( () => import('./../components/footer'))
    const PhotoProject = lazy( () => import('./../components/photo-project'))

    const renderLoader = () => <p>loading</p>
    const isSSR = typeof window === "undefined"


    return(
        <div>
            {!isSSR && (
                <Suspense fallback={renderLoader()}>
                <Helmet htmlAttributes={{lang: 'en'}}>
                      <meta charSet="utf-8"/>
                      <meta name="description" content="project from portflio haris fadhilah"/>
                      <meta name="keywords" content="project portfolio haris fadhilah list work" />
                      <meta name="robots" content="index, follow" />
                      <title>Project List</title>
                      <link rel="canonical" href="https://harisfadhilah.com/project/"/>
                      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
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
            )}
        </div>
    ) 
}