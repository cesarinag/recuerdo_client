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
      haikus: null
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props
    // console.log(haiku)
    haikuIndex(user)
      .then(res => this.setState({ haikus: res.data.haikus }))
      .then(() => msgAlert({
        heading: 'fetched',
        message: messages.haikuIndexSuccess,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'error for you',
          message: messages.haikuIndexFailure + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { haikus } = this.state

    if (!haikus) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }

    const haikusJsx = haikus.map(haikus => (
      <Link to={`/haikus/${haikus.id}`} key={haikus.id}>
        <li>
          {haikus.title}
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
