import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { withRouter } from 'react-router-dom'
import { haikuShow } from '../../api/haiku'

class ShowHaiku extends Component {
  constructor (props) {
    super(props)

    this.state = {
      haiku: null
    }
  }

  componentDidMount () {
    const { user, match, msgAlert } = this.props

    // make a request for a signle haiku
    haikuShow(match.params.id, user)
    // set the movie state to the haiku we got back in the responses data
      .then(res => this.setState({ haiku: res.data.haiku }))
      .then(() => msgAlert({
        heading: 'here is one',
        message: 'just the one here',
        variant: 'success'
      }))
      .catch(error => [
        msgAlert({
          heading: 'show haiku fail',
          message: 'cannot show u bc: ' + error.message,
          variant: 'danger'
        })
      ])
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

    return (
      <div>
        <h3>{haiku.title}</h3>
        <h4>{haiku.fiveone}</h4>
        <h4>{haiku.seven}</h4>
        <h4>{haiku.fivetwo}</h4>
        {/* <button>delete haiku</button> */}
        <button>update haiku</button>
      </div>
    )
  }
}

export default withRouter(ShowHaiku)
