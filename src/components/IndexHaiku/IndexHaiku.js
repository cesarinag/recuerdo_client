import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class IndexHaiku extends Component {
  constructor () {
    super()
    this.state = {
      haiku: null
    }
  }

  componentDidMount () {
    axios(apiUrl + '/haikus/')
      .then(res => this.setState(({ haiku: res.data.haiku })))
      .catch(console.error)
  }

  render () {
    let haikuJsx

    if (!this.state.haiku) {
      haikuJsx = 'Loading still...'
    } else if (this.state.haiku.length === 0) {
      haikuJsx = 'do you even Haiku?'
    } else {
      const haikuList = this.state.haiku.map(haiku => (
        <li key={haiku.id}>
          <Link to={`/haiku/${haiku.id}`}>
            {haiku.owner}
          </Link>
        </li>
      ))

      haikuJsx = (
        <ul>
          {haikuList}
        </ul>
      )
    }

    return (
      <div>
        <h1>Index Haiku Page</h1>
        {haikuJsx}
      </div>
    )
  }
}

export default IndexHaiku
