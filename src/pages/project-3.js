import React, {lazy,Suspense} from 'react'
import {Helmet} from 'react-helmet'
import { Container, Row, Col } from 'react-bootstrap'
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import Loading from '../components/loading'


export default function Project3(props) {
    const Navbar = lazy( () => import('./../components/navbar'))
    const Footer = lazy( () => import('./../components/footer'))

    const productText = {
      textAlign: 'center',
      color: '#FF9D00'
    }

    const renderLoader = () => <Loading/>
    const isSSR = typeof window === "undefined"

    const arrData = props.data.project.nodes

    return (
        <div>
          {!isSSR && (
            <Suspense fallback={renderLoader()}>
            <Helmet htmlAttributes={{lang: 'en'}}>
              <meta charSet="utf-8"/>
              <meta name="description" content="bri google hackaton winners, diendorse marketplace is an integrated application between influencers and businessmen"/>
              <meta name="keywords" content="hackaton portfolio haris fadhilah google bri banking financial" />
              <meta name="robots" content="index, follow" />
              <title>Project 3 - BRIxGoogle Hackaton 2020</title>
              <link rel="canonical" href="https://haris.lol/project-3/"/>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
            </Helmet>
            <Container>
                <Navbar/>
                <Row className={`justify-content-center mt-5`}>
                    <Col md={8} className={`px-4`}>
                        <h3 className={'my-2'}>BRIxGoogle Hackaton 2020</h3>           
                    </Col>
                    <Col md={12} className={`px-4`}>
                        <GatsbyImage className={'mt-5 lazyload'} image={arrData[0].images.childImageSharp.gatsbyImageData} alt="cover"/>  
                    </Col>
                    <Col md={8} className={`px-4`}>
                        <p>Bank Rakyat Indonesia (BRI) and Google Indonesia are collaborating in holding an event titled BRI x Google Hackaton which was held in February 2020. 
                        The event was called the digital economy players in the small, micro, and medium enterprise (SME) sector to develop digital platforms.</p>
                        <p>BRI x Google Hackathon 2020 with the theme "Supporting Indonesia Digital Economy based on Small Medium Enterprises (SME) for BRilian Indonesia" 
                        was held for two days in three major cities in Indonesia; Jakarta, Bandung, and Surabaya.</p>
                        <p>Of the many who registered their ideas, there will be 20 participants/teams that will qualify for the final stage in each city. These 20 participants will attend the technical meeting. 
                        Participants are given one week to perfect their ideas until the final begins. </p>
                        <p>One of the main requirements in this final round is that participants must integrate their application with the <strong>BRI Application Programming Interface (BRI API)</strong> and use the <strong>Google Cloud Product (GPP)</strong> product. 
                        BRI API itself is a product that allows third parties to use features or functions of financial services from Bank BRI in their platform quickly and safely.</p>

                        <h5 className={'my-3'}>1. Problems</h5>
                        <p>Our team was selected to advance to the final stage. With the theme of the Hackathon mentioned, we see a gap in the endorsement industry that is happening. 
                          On social media, there is a thing called "Paid to Promote" It is an activity where businessmen/SMEs ask influencers to promote their products.</p>
                        <p>Businessmen often find it difficult to promote their business. Usually, they do "Paid to Promote" services to influencers (via Instagram/Tiktok), but the process is manual. On the other for influencers, 
                          those with large followers but not well known (not an artist/Selebgram) want to earn extra income from their social media.</p>

                        <h5 className={'my-3'}>2. Solutions</h5>
                        <p>With the problems mentioned above, we will create a marketplace that brings businessmen/SMEs and influencers into one integrated platform. the platform itself called Diendorse</p>
                        <Col md={4} className={'justify-content-center my-4 ml-auto mr-auto'}>
                          <GatsbyImage className={'lazyload'} image={arrData[1].images.childImageSharp.gatsbyImageData} alt="diendorse"/>  
                        </Col>
                        <p>With Diendorse, SMEs can advertise their products, and they can directly find influencers to promote their products. On the other hand, 
                          influencers can also gain additional income by making a "Paid to Promote" from SMEs. And influencers can find advertisements and make an offer/bidding to that SMEs directly.</p>
                        
                        <h5 className={'my-3'}>3. Products</h5>
                        <p>Our target market is influencers on social media such as Instagram/Tiktok and SMEs/any businessmen. With these two target markets, Diendorse has three main features. 
                          SMEs can post advertisements, afterward they can also find influencers to promote their products. On the other for influencers, if there's no request for promoting a product they can hunt advertisements to bid.</p>
                        <Row className={'justify-content-center'}>
                          <Col md={3} className={'m-3 px-5 py-3'}>
                            <GatsbyImage className={'lazyload'} image={arrData[2].images.childImageSharp.gatsbyImageData} alt="postads"/>  
                            <h6 className={'my-3'} style={productText}>Post Advertisement</h6>
                          </Col>
                          <Col md={3} className={'m-3 px-5 py-3'}>
                            <GatsbyImage className={'lazyload'} image={arrData[3].images.childImageSharp.gatsbyImageData} alt="findinf"/> 
                            <h6 className={'my-3'} style={productText}>Find Influencer</h6> 
                          </Col>
                          <Col md={3} className={'m-3 px-5 py-3'}>
                            <GatsbyImage className={'lazyload'} image={arrData[4].images.childImageSharp.gatsbyImageData} alt="findads"/>  
                            <h6 className={'my-3'} style={productText}>Find Advertisement</h6>
                          </Col>
                        </Row>
                        <h6 className={'my-5'}><strong>Dashboard Influencer</strong></h6>
                        <GatsbyImage className={'lazyload'} style={{borderRadius:"8px"}} image={arrData[5].images.childImageSharp.gatsbyImageData} alt="prod1"/>
                        <h6 className={'my-5'}><strong>Dashboard Businessmen/SMEs</strong></h6>
                        <GatsbyImage className={'lazyload'} style={{borderRadius:"8px"}} image={arrData[6].images.childImageSharp.gatsbyImageData} alt="prod2"/>
                        <h6 className={'my-5'}><strong>Create Advertisement</strong></h6>
                        <GatsbyImage className={'lazyload'} style={{borderRadius:"8px"}} image={arrData[7].images.childImageSharp.gatsbyImageData} alt="prod3"/>  


                        <h5 className={'my-3'}>4. Technology</h5>
                        <p>Roles in this team, the three of us, I am responsible for web app design and interface coding. My friend is in charge of full front-end development, and my other friend is in backend development.</p>
                        <p>The technology we use is React.js, styling with MD-Bootstrap, state management with Redux. 
                          For the backend service, we use Node.js with express.js. Authentication account, we use the token from JWT. Afterward the database, we use MySQL.</p>
                        <GatsbyImage className={'my-4 lazyload'} image={arrData[8].images.childImageSharp.gatsbyImageData} alt="tech1"/>
                        <p>Concerning technology that is mandatory to use, we integrate our application with the BRI API Product. Our team uses BRI VA for payments/transactions. 
                          With Google Cloud Product, the features we use are Google App Engine, Google Cloud Storage, and Google Cloud SQL.</p>
                        <GatsbyImage className={'my-4 lazyload'} image={arrData[9].images.childImageSharp.gatsbyImageData} alt="tech2"/>

                        <h5 className={'my-3'}>5. Final Thoughts</h5>
                        <p>For the revenue opportunity, the primary revenue are we will charge 5% from every transaction and there will be paid SMEs/influencers with premium features.</p>
                        <p>with the ideas and execution that I mentioned, We were shocked to know that we made it into top 5 because we didn’t finish our pitch. 
                          Then we thought to ourselves 'we can reach top 3' in the second pitch because our app was already live on google cloud and it used BRI open banking API for its transaction. And the rest is history, 2nd winner is fabulous isn't it?</p>
                    </Col>
                    <Col md={12} className={`px-4`}>
                        <GatsbyImage className={'my-4 lazyload'} style={{borderRadius:"8px"}} image={arrData[10].images.childImageSharp.gatsbyImageData} alt="final1"/>
                        <GatsbyImage className={'my-4 lazyload'} style={{borderRadius:"8px"}} image={arrData[11].images.childImageSharp.gatsbyImageData} alt="final2"/>  
                        <GatsbyImage className={'my-4 lazyload'} style={{borderRadius:"8px"}} image={arrData[12].images.childImageSharp.gatsbyImageData} alt="final3"/>  
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
        project: allProject3Yaml {
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