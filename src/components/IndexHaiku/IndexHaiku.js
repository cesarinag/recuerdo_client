import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
// import apiUrl from '../../apiConfig'
import { haikuIndex } from '../../api/haiku'

class IndexHaiku extends Component {
  constructor (props) {
    super(props)

    this.state = {
      haikus: null
    }
  }

  componentidMount () {
    const { msgAlert, user } = this.props

    haikuIndex(user)
      .then(res => this.setState({ haikus: res.data.haikus }))
      .then(() => msgAlert({
        heading: 'fetched haikus for fun',
        message: 'here are the things',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'error for you',
          message: 'please refer to this error: ' + error.message,
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
      <Link to={`/haikus/${haikus._id}`} key={haikus._id}>
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
