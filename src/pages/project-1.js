import React, {lazy, Suspense} from 'react'
import {Helmet} from 'react-helmet'
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import { Col, Row, Container } from 'react-bootstrap'


export default function Project1(props) {

    const Navbar = lazy( () => import('./../components/navbar'))
    const Footer = lazy( () => import('./../components/footer'))

    const renderLoader = () => <p>loading</p>
    const isSSR = typeof window === "undefined"

    const arrData = props.data.project.nodes

    return(
        <div>
          {!isSSR && (
            <Suspense fallback={renderLoader()}>
            <Helmet htmlAttributes={{lang: 'en'}}>
                  <meta charSet="utf-8"/>
                  <meta name="description" content="darahku is a blood donor application in indonesia"/>
                  <meta name="keywords" content="project 1 portfolio haris fadhilah darahku ux study" />
                  <meta name="robots" content="index, follow" />
                  <title>Project 1 - Darahku UX Study Case</title>
                  <link rel="canonical" href="https://harisfadhilah.com/project-1/"/>
                  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
            </Helmet>
            <Container>
                <Navbar/>
                <Row className={`justify-content-center mt-5`}>
                    <Col md={8} className={`px-4`}>
                      <h3 className={'my-2'}>{arrData[0].title}</h3>           
                    </Col>
                    <Col md={12} className={`px-4`}>
                      <GatsbyImage className={'my-5 lazyload'} style={{borderRadius:"8px"}} image={arrData[0].img[0].images.childImageSharp.gatsbyImageData} alt="cover"/>    
                    </Col>
                    <Col md={8} className={`px-4`}>
                      <p>{arrData[0].content[0].paragraph}</p>
                      <p>{arrData[0].content[1].paragraph}</p>
                      <GatsbyImage className={'my-4 lazyload'} style={{borderRadius:"8px"}} image={arrData[0].img[1].images.childImageSharp.gatsbyImageData} alt="bmc"/> 
                      <p>{arrData[0].content[2].paragraph}</p>
                      <p>{arrData[0].content[3].paragraph}</p>

                      <h5 className={'my-3'}>{arrData[1].title}</h5> 
                      <p>{arrData[1].content[0].paragraph}</p>
                      <GatsbyImage className={'mt-4 lazyload'} style={{borderRadius:"8px 8px 0 0"}} image={arrData[1].img[0].images.childImageSharp.gatsbyImageData} alt="storyboard1"/> 
                      <GatsbyImage className={'mb-4 lazyload'} style={{borderRadius:"0 0 8px 8px"}} image={arrData[1].img[1].images.childImageSharp.gatsbyImageData} alt="storyboard2"/> 

                      <h5 className={'my-3'}>{arrData[2].title}</h5>
                      <p>{arrData[2].content[0].paragraph}</p>
                      <h6 className={'my-3'}><strong>{arrData[2].subtitle[0].item}</strong></h6>
                      <GatsbyImage className={'lazyload'} style={{borderRadius:"8px"}} image={arrData[2].img[0].images.childImageSharp.gatsbyImageData} alt="flow1"/> 
                      <h6 className={'my-5'}><strong>{arrData[2].subtitle[1].item}</strong></h6>
                      <GatsbyImage className={'lazyload'} style={{borderRadius:"8px"}} image={arrData[2].img[1].images.childImageSharp.gatsbyImageData} alt="flow2"/> 
                      <h6 className={'my-5'}><strong>{arrData[2].subtitle[2].item}</strong></h6>
                      <GatsbyImage className={'lazyload'} style={{borderRadius:"8px"}} image={arrData[2].img[2].images.childImageSharp.gatsbyImageData} alt="flow3"/> 

                      <h5 className={'my-3'}>{arrData[3].title}</h5>
                      <p>{arrData[3].content[0].paragraph}</p>
                      <GatsbyImage className={'my-4 lazyload'} style={{borderRadius:"8px"}} image={arrData[3].img[0].images.childImageSharp.gatsbyImageData} alt="wireframe"/> 

                      <h5 className={'my-3'}>{arrData[4].title}</h5>
                      <p>{arrData[4].content[0].paragraph}</p>
                      <h6 className={'my-3'}><strong>{arrData[4].subtitle[0].item}</strong></h6>
                      <GatsbyImage className={'lazyload'} style={{borderRadius:"8px"}} image={arrData[4].img[0].images.childImageSharp.gatsbyImageData} alt="mock1"/>
                      <h6 className={'my-5'}><strong>{arrData[4].subtitle[1].item}</strong></h6>
                      <GatsbyImage className={'lazyload'} style={{borderRadius:"8px"}} image={arrData[4].img[1].images.childImageSharp.gatsbyImageData} alt="mock2"/> 
                      <h6 className={'my-5'}><strong>{arrData[4].subtitle[2].item}</strong></h6>
                      <GatsbyImage className={'lazyload'} style={{borderRadius:"8px"}} image={arrData[4].img[2].images.childImageSharp.gatsbyImageData} alt="mock3"/> 

                      <h5 className={'my-3'}>{arrData[5].title}</h5>
                      <p>{arrData[5].content[0].paragraph}</p>
                      <p>{arrData[5].content[1].paragraph}</p>
                      <GatsbyImage className={'my-4 lazyload'} style={{borderRadius:"8px"}} image={arrData[5].img[0].images.childImageSharp.gatsbyImageData} alt="color"/>

                      <h5 className={'my-3'}>{arrData[6].title}</h5>
                      <p>{arrData[6].content[0].paragraph}</p>
                      <GatsbyImage className={'my-4 lazyload'} style={{borderRadius:"8px"}} image={arrData[6].img[0].images.childImageSharp.gatsbyImageData} alt="logo"/>

                      <h5 className={'my-3'}>{arrData[7].title}</h5>
                      <p>{arrData[7].content[0].paragraph}</p>
                      <p>{arrData[7].content[1].paragraph}</p>

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
        project: allProject1Yaml {
          nodes {
            title
            subtitle {
              item
            }
            content {
              paragraph
            }
            img {
              images {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
          }
        }
    }
`