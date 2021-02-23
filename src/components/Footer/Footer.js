import React from 'react'
import './Footer.css'
// import { Button } from './Button'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          want more haikus?
        </p>
        <p className='footer-subscription-text'>
          you can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h5>About Us</h5>
            <Link to='/sign-up/'>How it works</Link>
            <Link to='#'>Testimonials</Link>
            <Link to='#'>Careers</Link>
            <Link to='#'>Investors</Link>
            <Link to='#'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h5>Contact Us</h5>
            <Link to='#'>Contact</Link>
            <Link to='#'>Support</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='#' className='social-logo'>
              haiku75.
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>haiku75. © 2021</small>
        </div>
      </section>
    </div>
  )
}

export default Footer
