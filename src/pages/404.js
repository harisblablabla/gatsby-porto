import React, {lazy, Suspense} from "react"
import { Container } from "react-bootstrap"

const Navbar = lazy( () => import('./../components/navbar'))
const Footer = lazy( () => import('./../components/footer'))

const renderLoader = () => <p>loading</p>

const NotFoundPage = () => (
  <Suspense fallback={renderLoader()}>
      <Container>
        <Navbar />
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Footer />
      </Container>
  </Suspense>
)

export default NotFoundPage
