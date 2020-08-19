import React from "react"
import Container from "react-bootstrap/Container"
import Navbarr from "../components/navbar"
import styleIndex from './index.module.css'
import Typed from 'react-typed';

export default function Home() {

  // const[typed,setTyped] = useState()

  return (
    <div className={styleIndex.bgIndex}>
       <Container>
        <Navbarr/>
        <div className={styleIndex.centering}>
          <h1>Hallo! I'm Haris Fadhilah</h1>
          <div>
                <Typed
                    typedRef = { (type) => {
                      
                    } }
                    strings={['Software Engineer','Frontend Developer','UI Designer']}
                    typeSpeed={50}
                    backSpeed={70}
                    smartBackspace
                    loop
                    className={styleIndex.typing}
                />
                <br/>
 
      
          </div>

        </div>
      </Container>
      <br />
    </div>
  )
}
