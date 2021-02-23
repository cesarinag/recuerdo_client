import React from 'react'
import Button from 'react-bootstrap/Button'

function HeroSection () {
  return (
    <div className='hero-container'>
      <video src="../../../public/videos/video-2.mp4" autoPlay loop muted />
      <h1>welcome to haiku75.</h1>
      <p>your first and last lines are fifteen characters each</p>
      <p>your second line is a generous twenty-four</p>
      <p>test your whitespace</p>
      <div className="hero-btns">
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
