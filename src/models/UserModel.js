import axios from 'axios'
axios.defaults.withCredentials = true; // Thanks Travis!


const url = `https://teamblueapi.herokuapp.com/api/v1/users`

class UserModel {

  static getProfile = (user) => {
    let request = axios.get(`${url}/${user}`)
    return request
  }

  static update = ( userId, updatedObject) => {
    let request = axios.put(`${url}/${userId}`, updatedObject)
    return request
  }
}

export default UserModel