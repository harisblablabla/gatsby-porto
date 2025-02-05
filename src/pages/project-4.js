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

    return (
        <div>
            {!isSSR && (
                <Suspense fallback={renderLoader()}>
                <Helmet htmlAttributes={{lang: 'en'}}>
                  <meta charSet="utf-8"/>
                  <meta name="description" content="FitFix is for you! We’ll help you to build a long-lasting diet lifestyle by chunking your weight loss goal, set your daily calorie goal, and evaluate your progress to minimize the chance of the yo-yo effect in dieting."/>
                  <meta name="keywords" content="fitfix diet application app store apple portfolio haris fadhilah" />
                  <meta name="robots" content="index, follow" />
                  <title>FitFix App</title>
                  <link rel="canonical" href="https://haris.lol/project-4/"/>
                  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
                </Helmet>
                <Container>
                    <Navbar/>
                    <Row className={`justify-content-center mt-5`}>
                        <Col md={8} className={`px-4`}>
                            <h3 className={'my-2'}>FitFix App</h3>           
                        </Col>
                        <Col md={12} className={`px-4`}>
                            <GatsbyImage className={'mt-5 lazyload'} style={{borderRadius:"8px"}} image={arrData[0].images.childImageSharp.gatsbyImageData} alt="cover"/>  
                        </Col>
                        <Col md={8} className={'px-4'}>
                            <h5 className={'my-4'}><strong>Introducing, FitFix</strong></h5>
                            <p>Have you ever been on a diet? But your weight is back to its original weight?? 😥 Well, FitFix is for you! We’ll help you to build a long-lasting diet lifestyle by chunking your weight loss goal, set your daily calorie goal, and evaluate your progress to minimize the chance of the yo-yo effect in dieting.</p>
                            <p>This project was done as a group (6 people) at the Apple Developer Academy. My role in the project is as a lead engineer, with more focus on application development (managing backlogs, prioritizing tasks, and unit testing). Before getting into application development, the research process from Fitfix is done together even though the roles in the team are different.</p>
                            <h5 className={'my-4'}><strong>My Work</strong></h5>
                            <ul className=''>
                                <li>Conduct idea research with the team for the applications. starting from big ideas, general investigation, domain investigation, to solution concepts.</li>
                                <li>Calculate the needed calorie formula to make a weight loss plan based on our research.</li>
                                <li>Managing dev backlog and prioritizing tasks with scrum.</li>
                                <li>Create the app with other engineers with swiftUI.</li>
                                <li>Uploaded the application to the TestFlight and App Store.</li>
                            </ul>
                        </Col>
                        <Col md={12} className={'px-4'}>
                            <GatsbyImage className={'my-3 lazyload'} style={{borderRadius:"8px"}} image={arrData[1].images.childImageSharp.gatsbyImageData} alt='banner application'/>
                        </Col>
                        <Col md={8} className={'px-4'}>
                            <h5 className={'my-4'}><strong>Technology</strong></h5>
                            <ul className=''>
                                <li>Swift UI</li>
                                <li>MVVM Architecture</li>
                                <li>Implemented @Apple/Combine for State Management, and UI Binding</li>
                                <li>Integrated with Fat Secret API for calories counting</li>
                                <li>Store the user data with CoreData</li>
                                <li>Used @Apple/HealthKit to track user activity</li>
                                <li>@Apple/Charts</li>
                            </ul>
                        </Col>
                        <Col md={12} className={'px-4'}>
                            <GatsbyImage className={'my-3 lazyload'} style={{borderRadius:"8px"}} image={arrData[2].images.childImageSharp.gatsbyImageData} alt='summary app'/>
                            <GatsbyImage className={'my-3 lazyload'} style={{borderRadius:"8px"}} image={arrData[3].images.childImageSharp.gatsbyImageData} alt='footer banner application'/>
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