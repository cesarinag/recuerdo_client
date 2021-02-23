import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { Redirect, withRouter } from 'react-router-dom'
import { haikuShow, haikuUpdate } from '../../api/haiku'
import HaikuForm from '../HaikuForm/HaikuForm'

class UpdateHaiku extends Component {
  constructor (props) {
    super(props)
    this.state = {
      haiku: null,
      updated: false
    }
  }
  componentDidMount () {
    const { user, match, msgAlert } = this.props
    // make a request for a single haiku
    haikuShow(match.params.id, user)
      // set the haiku state to the haiku we got back in response data
      .then(res => this.setState({ haiku: res.data.haiku }))
      .then(() => msgAlert({
        heading: 'Showing Haiku Successfully',
        message: 'You can now edit this haiku.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Showing Haiku Failed',
          message: 'Failed to display haiku: ' + error.message,
          variant: 'danger'
        })
      })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const { user, match, msgAlert } = this.props
    const { haiku } = this.state
    haikuUpdate(match.params.id, haiku, user)
      .then(res => this.setState({ updated: true }))
      .then(() => {
        msgAlert({
          heading: 'Updated Haiku Successfully',
          message: 'Haiku has been updated',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Updating hAIKU Failed',
          message: 'HAIKU was not updated due to error: ' + err.message,
          variant: 'danger'
        })
      })
  }
  // same handleChange from HaikuCreate
  handleChange = event => {
    event.persist()
    this.setState((state) => {
      return {
        haiku: { ...state.haiku, [event.target.name]: event.target.value }
      }
    })
  }
  render () {
    const { haiku, updated } = this.state
    // if we don't have a haiku yet
    if (!haiku) {
      // show spinner loading
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }
    // if the haiku is updated
    if (updated) {
      // redirect to the haiku index page
      return <Redirect to ={`/haikus/${this.props.match.params.id}`} />
    }
    return (
      <div>
        <h3>Edit Movie</h3>
        <HaikuForm
          haiku={haiku}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}
export default withRouter(UpdateHaiku)
