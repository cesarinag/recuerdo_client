import React, { Component } from 'react'
// import Spinner from 'react-bootstrap/Spinner'
import { withRouter, Redirect, Link } from 'react-router-dom'
import { haikuShow, haikuDelete } from '../../api/haiku'
import messages from '../AutoDismissAlert/messages'

class ShowHaiku extends Component {
  constructor (props) {
    super(props)

    this.state = {
      haiku: null,
      deleted: false
    }
  }

  componentDidMount () {
    const { user, match, msgAlert } = this.props
    console.log(this.props)
    // make a request for a signle haiku
    haikuShow(match.params.id, user)
    // set the haiku state to the haiku we got back in the responses data
      .then(res => this.setState({ haiku: res.data.haiku }))
      .then(() => msgAlert({
        heading: 'here is one',
        message: messages.haikuShowSuccess,
        variant: 'success'
      }))
      .catch(error => [
        msgAlert({
          heading: 'show haiku fail',
          message: messages.haikuShowFailure + error.message,
          variant: 'danger'
        })
      ])
  }

  handleDelete = event => {
    const { user, match, msgAlert } = this.props
    console.log('this is props', this.props)
    haikuDelete(match.params.id, user)
      .then(() => this.setState({ deleted: true }))
      .then(() => msgAlert({
        heading: 'Deleted Haiku Successfully!',
        message: 'Haiku deleted!',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Deleting Haiku Failed',
          message: 'Failed with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { haiku, deleted } = this.state
    if (!haiku) {
      return (
        'Loading..'
      )
    }
    if (deleted) {
      console.log('It is deleted')
      console.log('/haikus/')
      return <Redirect to="/haikus/" />
    }

    return (
      <div>
        <h3>{haiku.title}</h3>
        <h4>{haiku.fiveone}</h4>
        <h4>{haiku.seven}</h4>
        <h4>{haiku.fivetwo}</h4>
        <button onClick={this.handleDelete}>delete haiku</button>
        <button>
          <Link to={`/haikus/${haiku.id}/edit/`}>update haiku</Link>
        </button>
      </div>
    )
  }
}

export default withRouter(ShowHaiku)
