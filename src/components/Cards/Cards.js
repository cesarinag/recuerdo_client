import React from 'react'
// import './Cards.css'
// import CardItem from './CardItem'
import Card from 'react-bootstrap/Card'

function Cards (haiku) {
  return (
    <div className='cards'>
      <h3><i>featured haikus:</i></h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Card>
              <Card.Header>
              i love haiku75
              </Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    this is a haiku, allegedly
                    {' '}
                  </p>
                  <footer className="blockquote-footer">
                    {haiku.owner}
                    <cite title="Source Title">
                      a human
                    </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
            <li>
              <Card>
                <Card.Header>
                haikus do not often have titles
                </Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      {' '}
                      gulping June rains, swollen Mogami river
                      {' '}
                    </p>
                    <footer className="blockquote-footer">
                      {haiku.owner}
                      <cite title="Source Title">
                        basho
                      </cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </li>
            <li>
              <Card>
                <Card.Header>
                dark chocolate is the best
                </Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      {' '}
                      a chocolatiere ate chocolate
                      {' '}
                    </p>
                    <footer className="blockquote-footer">
                      {haiku.owner}
                      <cite title="Source Title">
                        who likes chocolate
                      </cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </li>
            <li>
              <Card>
                <Card.Header>
                never silence your friends
                </Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      {' '}
                      she has words to say
                      {' '}
                    </p>
                    <footer className="blockquote-footer">
                      {haiku.owner}
                      <cite title="Source Title">
                        maybe your mom
                      </cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </li>
            <li>
              <Card>
                <Card.Header>
                posted like a card
                </Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      {' '}
                      their words would be here
                      {' '}
                    </p>
                    <footer className="blockquote-footer">
                      {haiku.owner}
                      <cite title="Source Title">
                        maybe your friend
                      </cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </li>
            <li>
              <Card>
                <Card.Header>
                this is fun
                </Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      {' '}
                      this is another haiku
                      {' '}
                    </p>
                    <footer className="blockquote-footer">
                      {haiku.owner}
                      <cite title="Source Title">
                        could be you
                      </cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
