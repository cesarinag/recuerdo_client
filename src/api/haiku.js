import apiUrl from '../apiConfig'
import axios from 'axios'

export const haikuCreate = (user, haiku) => {
  return axios({
    url: apiUrl + '/haiku/',
    method: 'POST',
    headers: {
      // we need the user so we have access to their token
      'Authorization': `Token ${user.token}`
    },
    // send the cookie object as our data for creating a movie
    data: {
      haiku: {
        fiveone: haiku.fiveone,
        seven: haiku.seven,
        fivetwo: haiku.fivetwo
      }
    }
  })
}

export const haikuIndex = (user, haiku) => {
  return axios({
    url: apiUrl + '/haikus/',
    method: 'GET',
    headers: {
      'Authorization': `Token ${user.token}`
    }
    // data: { purchases }
  })
}

export const haikuUpdate = (id, haiku, user) => {
  return axios({
    url: apiUrl + '/haiku/' + id,
    method: 'PATCH',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      haiku: {
        fiveone: haiku.fiveone,
        seven: haiku.seven,
        fivetwo: haiku.fivetwo
      }
    }
  })
}

export const haikuShow = (id, user) => {
  return axios({
    url: apiUrl + '/haiku/' + id,
    method: 'GET',
    headers: {
      'Authorization': `Token ${user.token}`
    }
    // data: { purchases }
  })
}
