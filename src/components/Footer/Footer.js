import React from 'react'
import './Footer.css'
// import { Button } from './Button'
// import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='#/' className='social-logo'>
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
