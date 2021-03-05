import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Hero.css'

function HeroSection () {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          // className="d-block w-100 h-100"
          src="https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1035&q=80"
          alt="first slide plant picture"
          style={{ width: 1425, height: 540 }}
        />
        <Carousel.Caption>
          <h1>welcome to <i><b>haiku75.</b></i></h1>
          <h3><b>whitespace</b> counts here!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          // className="d-block w-100"
          src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80"
          alt="Second slide tree picture"
          style={{ width: 1425, height: 540 }}
        />
        <Carousel.Caption>
          <h1>your <i>title</i></h1>
          <h3>is a total of <b>twelve</b> characters max</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={0}>
        <img
          // className="d-block w-100"
          src="https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
          alt="Third slide close up plant leaf picture"
          style={{ width: 1425, height: 540 }}
        />
        <Carousel.Caption>
          <h1>your <i>haiku</i></h1>
          <h3>your fives are <b>eighteen</b> characters max <br/>your seven is <b>twenty-four</b> characters max</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default HeroSection
