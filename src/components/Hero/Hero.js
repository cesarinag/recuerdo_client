import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import './Hero.css'

function HeroSection () {
  return (
    <div>
      <br/>
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
            <h3>is a total of <b>fifteen</b> characters max</h3>
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
      <Card>
        <Card.Body><h1><center>welcome to haiku75.</center></h1>
          <br />
          <h5><center><i>a haiku is a short poem structure that gains its origins in Japan.<br />
          it is comprised of three lines with the following syllable pattern:</i></center></h5><br/>
          <center>
            <h5>
          five syllables<br/>
          seven syllables<br/>
          five syllables<br/>
            </h5>
          </center>
          <br/>
          <h5><center>haiku75. gets its name from the total amount of characters allowed to create one!</center></h5>
          <br/>
          <h5><center>we ask you to take on the challenge of the following max chracter structure:</center></h5>
          <br />
          <center>
            <h5>
          title: 15 characters maximum
              <br/>
          fives: 18 chracters each maximum
              <br/>
          seven: 24 characters maximum
              <br/>
            </h5>
          </center>
          <br/>
          <h3>
            <center>
          sign up and start creating!
            </center>
          </h3>
        </Card.Body>
      </Card>
    </div>
  )
}

export default HeroSection
