import React from 'react'
import './Cards.css'
// import CardItem from './CardItem'
import Card from 'react-bootstrap/Card'

function Cards (haiku) {
  return (
    <div className='cards'>
      <h1>featured:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Card>
              <Card.Header>
              post
              </Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    {haiku.fiveone}
                    {haiku.seven}
                    {haiku.fivetwo}
                    {' '}
                  </p>
                  <footer className="blockquote-footer">
                    {haiku.owner}
                    <cite title="Source Title">
                      {haiku.title}
                    </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
