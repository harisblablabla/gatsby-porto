import React from 'react'
import { Col, Spinner } from 'react-bootstrap'

export default function Loading() {
  return (
    <Col md={12} className='d-flex mx-auto justify-content-center my-auto'>
        <Spinner animation="border" className='' />
    </Col>
  )
}