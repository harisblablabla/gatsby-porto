import React, {lazy, Suspense} from 'react'
import { Col, Row, Container} from 'react-bootstrap'
import { useSiteMetadata } from './../utils/use-site-metadata'


export default function About() {

    const Navbar = lazy( () => import('./../components/navbar'))
    const Footer = lazy( () => import('./../components/footer'))

    const renderLoader = () => <p>loading</p>

    const { about } = useSiteMetadata()

    return(
        <div>
            <Suspense fallback={renderLoader()}>
            <Container>
                <Navbar/>
                <Row className={`justify-content-center mt-5`}>
                    <Col md={6} className={`px-4`}>
                        <h2 style={{textAlign:'center'}}>tentang aku</h2>
                        {/* <p style={{boxSizing}} className={`mt-5`}>jaidjaidjiajdisajdiojijsioajdijaidjaijdiajsijdioajsidjaisjdiajsdaihduiahdushuhsauhduahsuidhjaidjaidjiajdisajdiojijsioajdijaidjaijdiajsijdioajsidjaisjdiajsdaihduiahdushuhsauhduahsuidhujaidjaidjiajdisajdiojijsioajdijaidjaijdiajsijdioajsidjaisjdiajsdaihduiahdushuhsauhduahsuidhu</p> */}
                        <p  className={`mt-5`}>{about[0]}</p>
                        <p  className={`mt-3`}>{about[1]}</p>
                        <p  className={`mt-3`}>{about[2]}</p>
                        <p  className={`mt-3`}>{about[3]} <a href = "mailto: hallo@harisfadhilah.com">this email</a> </p>
                       
                    </Col>
                </Row>
            </Container>
            <Footer/>
            </Suspense>
        </div>
    ) 
}