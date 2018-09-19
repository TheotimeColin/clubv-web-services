import axios from 'axios'

export default() => {
  return axios.create({
    // baseURL: `https://stark-coast-32689.herokuapp.com`
    baseURL: `http://localhost:8081`,
    headers: { 'Content-Type': 'application/json' }
  })
}