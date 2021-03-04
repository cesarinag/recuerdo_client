import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import HaikuForm from '../HaikuForm/HaikuForm'
import { haikuCreate } from '../../api/haiku'
// import haikus from '../data/haikus'
import messages from '../AutoDismissAlert/messages'

class CreateHaiku extends Component {
  constructor (props) {
    super(props)

    this.state = {
      haiku: {
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
    // console.log(haiku)
    haikuCreate(haiku, user)
      .then(res => {
        // console.log(res.data)
        this.setState({
          // title: haiku.title,
          // fiveone: haiku.fiveone,
          // seven: haiku.seven,
          // fivetwo: haiku.fivetwo,
          // owner: user.id,
          createdId: res.data.haiku.id
        })
        // return res
      })
      .then(res => msgAlert({
        heading: 'you made a haiku',
        message: messages.haikuCreateSuccess,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Create Haiku',
          message: messages.haikuCreateFailure + error.message,
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
      // console.log(`/haikus/${createdId}`)
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
