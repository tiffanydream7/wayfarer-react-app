import React, { Component } from 'react';
import axios from 'axios';
import PostContainer from './PostContainer';
const API_URL = 'http://localhost:4000/api/v1/users';
const userId = '5ccb1edd7c06e0efeb18e4bf'


class Profile extends Component {
    state = {
        response:{}
    }


    search = () => {
        axios.get(`${API_URL}/${userId}`)
        .then((res) => {
            console.log(res)
            this.setState({
                response: res.data
            });
        })
    }

    // shouldComponentUpdate = (nextProps, nextState) => {
    //     if(this.state.response.length === 0 &&
    //         this.state.query === nextState.query){
    //         return false;
    //     }
    //     return true;
    // }

    // componentDidUpdate = (prevProps, prevState) => {
    //     if(prevState.query !== this.state.query){
    //         this.search();
    //     }
    // }
    componentDidMount = () => {
        this.search()
    }

    render(){

        let profile = 'proifiel';
        let posts = [];
        if(this.state.response){
            console.log('get it')
            let user = this.state.response.data;
            console.log('user:', user)
            console.log('name:', (user ? user.name : 'nothing'))
            profile = 
            <div className="intro">
                <h1>{user ? user.name : 'no one yet'}</h1>
                <h2>{user ? user.currentCity : 'nowhere at all'}</h2>
            </div>
            
            posts = user ? user.posts : [{user: false}];
                    // <section className="profile">
                    //     <div backgroundcolor="red">
                    //         <h4>{user ? user.posts[0].title : "no travel info"}</h4>
                    //         <p>{user ? user.posts[0].content : 'no travel info '}</p>
                    //     </div>
                    // </section>
                
            
        }
        return(
            <div>
                {profile}
                <PostContainer info={posts}/>
            </div>
        )
    }
}





export default Profile