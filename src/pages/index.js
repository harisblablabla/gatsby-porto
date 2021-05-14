import React from "react"
import Container from "react-bootstrap/Container"
import Navbarr from "../components/navbar"
import * as styleIndex from './index.module.css'
import Typed from 'react-typed';
import { useSiteMetadata } from './../utils/use-site-metadata'

import medium from '../../static/images/medium-tile-2b.svg'
import linkedin from '../../static/images/linkedin-tile-2b.svg'
import github from '../../static/images/github-tile-2b.svg'

export default function Home() {

  const { title, typing, link } = useSiteMetadata()

  return (
    <div className={styleIndex.bgIndex}>
       <Container>
        <Navbarr/>
        <div className={styleIndex.centering}>
        <h1>{title}</h1>
          <div>
                <Typed
                    typedRef = { (type) => {
                      
                    } }
                    strings={typing}
                    typeSpeed={50}
                    backSpeed={70}
                    smartBackspace
                    loop
                    className={styleIndex.typing}
                />
                <br/>
          </div>
          <a href={link[0]} target="_blank" rel="noreferrer noopener" >
            <img src={medium} alt="medium" className={styleIndex.image} />
          </a>
          <a href={link[1]} target="_blank" rel="noreferrer noopener" >
            <img src={github} alt="github" className={styleIndex.image} />
          </a>
          <a href={link[2]} target="_blank" rel="noreferrer noopener" >
            <img src={linkedin} alt="linkedin" className={styleIndex.image} />
          </a>

        </div>
      </Container>
      <br />
    </div>
  )
}
