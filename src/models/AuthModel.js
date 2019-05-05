import axios from 'axios';
axios.defaults.withCredentials = true; // Thanks Travis!


const url = `https://teamblueapi.herokuapp.com/api/v1/auth`

class AuthModel {

  static login = (user) => {
    let request = axios.post(`${url}/login`, user)
    return request
  }
  static signup = (user) => {
    let request = axios.post(`${url}/signup`, user)
    return request
  }
  static logout = () => {
    let request = axios.post(`${url}/logout`)
    return request
  }
  

}

export default AuthModel