import React, { Component, Fragment } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class ShowHaiku extends Component {
  constructor () {
    super()

    this.state = {
      haiku: null,
      deleted: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/haikus/${this.props.match.params.id}`)
      .then(res => this.setState({ haiku: res.data.haiku }))
      .catch(console.error)
  }

  deleteHaiku = () => {
    axios({
      url: `${apiUrl}/haikus/${this.props.match.params.id}`,
      method: 'delete'
    })
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
  }

  render () {
    let haikuJsx
    const { haiku, deleted } = this.state

    if (deleted) {
      return <Redirect to="/haikus/"/>
    } if (!haiku) {
      haikuJsx = <img style={{ width: '30%' }} src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif" alt="loading gif"/>
    } else {
      haikuJsx = (
        <Fragment>
          <h3>{haiku.fiveone}</h3>
          <h3>{haiku.seven}</h3>
          <h3>{haiku.fivetwo}</h3>
          <p>Written by: {haiku.owner}</p>
          <button onClick={this.deleteHaiku}>Delete Haiku</button>
          <button>
            <Link to={`/update-haiku/${haiku.id}`}>Update Haiku</Link>
          </button>
        </Fragment>
      )
    }

    return (
      <Fragment>
        <h2>Show Me The Haiku</h2>
        {deleted ? <Redirect to="haikus"/> : haikuJsx}
      </Fragment>
    )
  }
}

export default ShowHaiku
