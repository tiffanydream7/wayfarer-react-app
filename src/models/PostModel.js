import axios from 'axios'
axios.defaults.withCredentials = true; // Thanks Travis!


const url = `https://teamblueapi.herokuapp.com/api/v1/posts`

class PostModel {

  static getPost = (blog) => {
    let request = axios.get(`${url}/${blog}`)
    return request
  }

  static getUserPost = (user) => {
    let request = axios.get(`${url}/userposts/${user}`)
    return request
  }

  static createPost = (newPost) => {
    let request = axios.post(`${url}`, newPost)
    return request
  }

  static updatePost = ( postId, updatedObject) => {
    let request = axios.put(`${url}/${postId}`, updatedObject)
    return request
  }
}

export default PostModel