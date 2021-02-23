import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import HaikuForm from '../HaikuForm/HaikuForm'
import { haikuCreate } from '../../api/haiku'

class CreateHaiku extends Component {
  constructor (props) {
    super(props)

    this.state = {
      haiku: {
        id: '',
        title: '',
        fiveone: '',
        seven: '',
        fivetwo: ''
      },
      createdId: null
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const { user, msgAlert } = this.props
    const { haiku } = this.state
    haikuCreate(haiku, user)
      .then(res => this.setState({ createdId: res.data.haiku }))
      .then(() => msgAlert({
        heading: 'you made a haiku',
        message: 'Haiku has been created successfully.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Create Haiku',
          message: 'Could not create haiku with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleChange = event => {
    event.persist()
    this.setState(state => {
      return {
        haiku: { ...state.haiku, [event.target.name]: event.target.value }
      }
    })
  }
  render () {
    const { haiku, createdId } = this.state
    if (createdId) {
      // console.log('this is the createdId', createdId)
      return <Redirect to={`/haikus/${createdId}`} />
    }
    return (
      <div>
        <h3>create a haiku below</h3>
        <HaikuForm
          haiku={haiku}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default CreateHaiku
