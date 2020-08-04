import React from "react"
import Container from "react-bootstrap/Container"
import Navbarr from "../components/navbar"
import styleIndex from './index.module.css'

export default function Home() {

  return (
    <div className={styleIndex.bgIndex}>
       <Container>
        <Navbarr/>
      </Container>
      <br />
    </div>
  )
}
