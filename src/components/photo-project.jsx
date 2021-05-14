import React from 'react'
import { graphql,Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Col, Row } from 'react-bootstrap'



export default function PhotoProject() {

    const pStyle = {
      color: '#B3B3B3'
    }

    const photoStyle = {
      borderRadius: '1em'
    }

    const data = useStaticQuery(
        graphql `
        query {
            project: allListProjectYaml(sort: {fields: link, order: DESC}) {
              edges {
                node {
                  id
                  title
                  desc
                  link
                  image {
                    childImageSharp {
                      gatsbyImageData(layout: FULL_WIDTH, formats: WEBP)
                    }
                  }
                }
              }
            }
          }
        `
    )
    return (
        data.project.edges.map( ({node}) => (
             <div key={node.id}>
              <Row className={'pt-4'}>
                <Col md={4}>
                  <Link to={node.link}>
                   <GatsbyImage style={photoStyle} className={'mb-3'} image={node.image.childImageSharp.gatsbyImageData} alt="" />
                  </Link>
                </Col>
                <Col md={8} className={'border-bottom pb-4'}>
                  <Link to={node.link}>
                    <h4>{node.title}</h4>
                  </Link>
                  <p style={pStyle}>{node.desc}</p>
                </Col>
              </Row>
            </div>
        ))
    )
        
        
    
}