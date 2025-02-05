import React, {lazy,Suspense} from 'react'
import {Helmet} from 'react-helmet'
import { Container, Row, Col } from 'react-bootstrap'
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

export default function Project5(props) {
    const Navbar = lazy( () => import('./../components/navbar'))
    const Footer = lazy( () => import('./../components/footer'))

    const renderLoader = () => <p>loading</p>
    const isSSR = typeof window === "undefined"
    const arrData = props.data.project.nodes

    return (
        <div>
            {!isSSR && (
                <Suspense fallback={renderLoader()}>
                <Helmet htmlAttributes={{lang: 'en'}}>
                  <meta charSet="utf-8"/>
                  <meta name="description" content="Arise is an agency dedicated to enhancing financial literacy in Indonesian society, with a special focus on risk management."/>
                  <meta name="keywords" content="life health insurance financial literacy risk management assets income replacement legacy haris fadhilah" />
                  <meta name="robots" content="index, follow" />
                  <title>ARISE</title>
                  <link rel="canonical" href="https://haris.lol/project-5/"/>
                  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
                </Helmet>
                <Container>
                    <Navbar/>
                    <Row className={`justify-content-center mt-5`}>
                        <Col md={8} className={`px-4`}>
                            <h3 className={'my-2'}>ARISE</h3>           
                        </Col>
                        <Col md={12} className={`px-4`}>
                            <GatsbyImage className={'mt-5 lazyload'} style={{borderRadius:"16px"}} image={arrData[0].images.childImageSharp.gatsbyImageData} alt="cover"/>  
                        </Col>
                        <Col md={8} className={'px-4'}>
                            <h5 className={'my-4'}><strong>Introducing, ARISE!</strong></h5>
                            <p>Arise is an agency dedicated to enhancing financial literacy in Indonesian society, with a special focus on risk management. Our mission is to empower individuals with the knowledge to effectively manage financial risks, particularly in the areas of assets management, income replacement, and legacy.</p>
                            <p>By educating the community on these crucial aspects, we aim to help people secure a better future, ensuring they are prepared for unforeseen financial challenges. At Arise, we are passionate about building a financially literate and resilient society.</p>
                            {/* <h5 className={'my-4'}><strong>How did we begin?</strong></h5> */}
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </Suspense>
            )}
        </div>
    )
}

export const query = graphql`
    query {
        project: allProject5Yaml {
          nodes {
              images {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
          }
        }
    }
`