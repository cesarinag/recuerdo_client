// import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
// import axios from 'axios'
import apiUrl from '../../apiConfig'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
// import { haikuCreate } from '../../api/haiku'
import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
// import apiUrl from '../apiConfig'
import HaikuFormat from '../HaikuFormat/HaikuFormat'

class CreateHaiku extends Component {
  constructor () {
    super()

    this.state = {
      haiku: {
        fiveone: '',
        seven: '',
        fivetwo: ''
      },
      createdId: null
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { haiku } = this.state
    axios({
      method: 'post',
      url: `${apiUrl}/haiku/`,
      data: { haiku }
    })
      .then(res => this.setState({ createdId: res.data.book.id }))
      .catch(console.error)
  }

  handleInputChange = (event) => {
    event.persist()
    this.setState(currState => {
      const { name, value } = event.target
      const updatedField = {
        [name]: value
      }
      console.log({ ...updatedField, ...currState.haiku })

      const newHaiku = {
        ...currState.haiku,
        ...updatedField
      }

      return { haiku: newHaiku }
    })
  }

  render () {
    if (this.state.createdId) {
      return <Redirect to={`/show-haiku/${this.state.createdId}`}/>
    }
    return (
      <Fragment>
        <h2>Create a Haiku</h2>
        <HaikuFormat
          haiku={this.state.haiku}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        />
      </Fragment>
    )
  }
}

export default CreateHaiku
