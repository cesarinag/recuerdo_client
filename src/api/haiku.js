import apiUrl from '../apiConfig'
import axios from 'axios'

export const haikuCreate = (haiku, user) => {
  return axios({
    url: apiUrl + '/haikus/',
    method: 'POST',
    headers: {
      // we need the user so we have access to their token
      'Authorization': `Token ${user.token}`
    },
    // send the haiku object as our data for creating a movie
    data: { haiku: haiku }
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
    url: apiUrl + '/haikus/' + id,
    method: 'PATCH',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: { haiku: haiku }
  })
}

export const haikuShow = (id, user) => {
  return axios({
    url: apiUrl + '/haikus/' + id,
    method: 'GET',
    headers: {
      'Authorization': `Token ${user.token}`
    }
    // data: { purchases }
  })
}
