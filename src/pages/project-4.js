import React, {lazy,Suspense} from 'react'
import {Helmet} from 'react-helmet'
import { Container, Row, Col } from 'react-bootstrap'
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

export default function Project4(props) {
    const Navbar = lazy( () => import('./../components/navbar'))
    const Footer = lazy( () => import('./../components/footer'))

    const renderLoader = () => <p>loading</p>
    const isSSR = typeof window === "undefined"
    const arrData = props.data.project.nodes

    const productText = {
        textAlign: 'center',
        color: '#FF9D00'
    }

    return (
        <div>
            {!isSSR && (
                <Suspense fallback={renderLoader()}>
                <Helmet htmlAttributes={{lang: 'en'}}>
                  <meta charSet="utf-8"/>
                  <meta name="description" content="bri google hackaton winners, diendorse marketplace is an integrated application between influencers and businessmen"/>
                  <meta name="keywords" content="fitfix diet application app store apple portfolio haris fadhilah" />
                  <meta name="robots" content="index, follow" />
                  <title>FitFix - Research Process</title>
                  <link rel="canonical" href="https://harisf.tech/project-4/"/>
                  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
                </Helmet>
                <Container>
                    <Navbar/>
                    <Row className={`justify-content-center mt-5`}>
                        <Col md={8} className={`px-4`}>
                            <h3 className={'my-2'}>FitFix - Research Phase</h3>           
                        </Col>
                        <Col md={12} className={`px-4`}>
                            <GatsbyImage className={'mt-5 lazyload'} style={{borderRadius:"16px"}} image={arrData[0].images.childImageSharp.gatsbyImageData} alt="cover"/>  
                        </Col>
                        <Col md={8} className={'px-4'}>
                            <h5 className={'my-4'}><strong>Introducing, FitFix</strong></h5>
                            <p>Have you ever been on a diet? But your weight is back to its original weight?? 😥 Well, FitFix is for you! We’ll help you to build a long-lasting diet lifestyle by chunking your weight loss goal, set your daily calorie goal, and evaluate your progress to minimize the chance of the yo-yo effect in dieting.</p>
                            <p>This project was done as a group (6 people) at the Apple Developer Academy. My role in the project is as a lead engineer, with more focus on application development (managing backlogs, prioritizing tasks, and unit testing). Before getting into application development, the research process from Fitfix is done together even though the roles in the team are different.</p>
                            <h5 className={'my-4'}><strong>How did we begin?</strong></h5>
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
        project: allProject4Yaml {
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