import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
// import apiUrl from '../../apiConfig'
import { haikuIndex } from '../../api/haiku'
import messages from '../AutoDismissAlert/messages'

class IndexHaiku extends Component {
  constructor (props) {
    super(props)

    this.state = {
      haiku: null
    }
  }

  componentDidMount () {
    const { haiku, user, msgAlert } = this.props
    console.log(haiku)
    haikuIndex(haiku, user)
      .then(res => this.setState({ haiku: res.data.haikus }))
      .then(() => msgAlert({
        heading: 'fetched haikus for fun',
        message: messages.haikuIndexSuccess,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'error for you',
          message: messages.haikusIndexFailure + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { haiku } = this.state

    if (!haiku) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }

    const haikusJsx = haiku.map(haiku => (
      <Link to={`/haikus/${haiku.id}`} key={haiku.id}>
        <li>
          {haiku.title}
        </li>
      </Link>
    ))

    return (
      <div>
        <h3>haikus:</h3>
        <ul>
          {haikusJsx}
        </ul>
      </div>
    )
  }
}

export default IndexHaiku
