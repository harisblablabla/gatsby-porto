import React from "react"
import Container from "react-bootstrap/Container"
import Navbarr from "../components/navbar"
import * as styleIndex from './index.module.css'
import {ReactTyped} from 'react-typed';
import { useSiteMetadata } from './../utils/use-site-metadata'
import {Helmet} from 'react-helmet'

import medium from '../../static/images/medium-tile-2b.svg'
import linkedin from '../../static/images/linkedin-tile-2b.svg'
import github from '../../static/images/github-tile-2b.svg'

export default function Home() {

  const { title, typing, link } = useSiteMetadata()

  return (
    <div className={styleIndex.bgIndex}>
            <Helmet htmlAttributes={{lang: 'en'}}>
                  <meta charSet="utf-8"/>
                  <meta name="description" content="This is a portfolio website, owned by haris fadhilah. Haris is a software engineer based in Jakarta"/>
                  <meta name="keywords" content="haris fadhilah is a software engineer frontend engineer ui designer web developer" />
                  <meta name="robots" content="index, follow" />
                  <title>Haris Fadhilah - Portfolio</title>
                  <link rel="canonical" href="https://haris.uno"/>
                  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
            </Helmet>
       <Container>
        <Navbarr/>
        <div className={styleIndex.centering}>
        <h1>{title}</h1>
          <div>
                <ReactTyped
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
