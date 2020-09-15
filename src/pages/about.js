import { graphql } from 'gatsby'
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Container from "react-bootstrap/Container"
import Navbar from "../components/navbar"

export default function About({data}) {

    return(
        <div>
            <Container>
                <Navbar/>
                <Row className={`justify-content-center mt-5`}>
                    <Col md={6} className={`px-4`}>
                        <h2 style={{textAlign:'center'}}>hallo ich heiße haris</h2>
                        <p  className={`mt-5`}>{data.site.siteMetadata.about[0]}</p>
                        <p  className={`mt-3`}>{data.site.siteMetadata.about[1]}</p>
                        <p  className={`mt-3`}>{data.site.siteMetadata.about[2]}</p>
                        <p  className={`mt-5`}>{data.site.siteMetadata.about[3]} <a href = "mailto: hallo@harisfadhilah.com">this email</a> </p>
                    </Col>
                </Row>
            </Container>
        </div>
    ) 
}

export const query = graphql `
    query {
        site {
            siteMetadata {
                about
            }
        }
    }
`