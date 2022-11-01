import axios from 'axios'

const ApiInstance = axios.create({
  baseURL: "https://linxdot-static.s3.eu-west-2.amazonaws.com",
  withCredentials: true
})

export default ApiInstance