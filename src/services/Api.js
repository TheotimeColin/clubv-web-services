import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://stark-coast-32689.herokuapp.com`
  })
}