import React, {lazy, Suspense} from 'react'
import { Helmet } from 'react-helmet'
import { Col, Row, Container} from 'react-bootstrap'
import { useSiteMetadata } from './../utils/use-site-metadata'


export default function About() {

    const Navbar = lazy( () => import('./../components/navbar'))
    const Footer = lazy( () => import('./../components/footer'))

    const renderLoader = () => <p>loading</p>
    const isSSR = typeof window === "undefined"

    const { about } = useSiteMetadata()

    return(
        <div>
            {!isSSR && (
                <Suspense fallback={renderLoader()}>
                <Helmet htmlAttributes={{lang: 'en'}}>
                      <meta charSet="utf-8"/>
                      <meta name="description" content="haris fadhilah is a software engineer with two years profesional career, specialties in frontend development with react or angular, and in ui design. backend had an experience with java springboot"/>
                      <meta name="keywords" content="haris fadhilah is a software engineer frontend engineer ui designer web developer" />
                      <meta name="robots" content="index, follow" />
                      <title>About Me</title>
                      <link rel="canonical" href="https://harisf.tech/about/"/>
                      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
                </Helmet>
                <Container>
                    <Navbar/>
                    <Row className={`justify-content-center mt-5`}>
                        <Col md={6} className={`px-4`}>
                            <h2 style={{textAlign:'center'}}>about me</h2>
                            <p  className={`mt-5`}>{about[0]}</p>
                            <p  className={`mt-3`}>{about[1]}</p>
                            <p  className={`mt-3`}>{about[2]}</p>
                            <p  className={`mt-3`}>{about[3]} <a href = "mailto: hallo@harisfadhilah.com">this email</a> </p>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
                </Suspense>
            )}
        </div>
    ) 
}