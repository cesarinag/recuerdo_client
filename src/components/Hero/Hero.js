import React from 'react'
// import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import './Hero.css'
// import 'img-1' from '../../../../img-1.png'

function HeroSection () {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1035&q=80"
          alt="First slide"
          height="500"
          width="500"
        />
        <Carousel.Caption>
          <h1>welcome to haiku75.</h1>
          <h3>spaces count here!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80"
          alt="Second slide"
          height="500"
          width="500"
        />
        <Carousel.Caption>
          <h1>title</h1>
          <h3>title = 12 characters max</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
          alt="Third slide"
          height="500"
          width="500"
        />
        <Carousel.Caption>
          <h1>your haiku</h1>
          <h3>your fives = 18 characters max & your seven = 24 characters max</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default HeroSection
