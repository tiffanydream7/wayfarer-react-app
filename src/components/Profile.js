import React, { Component } from 'react';
import axios from 'axios';
import PostContainer from './PostContainer';
import { Container, Col, Row, Image, Modal } from 'react-bootstrap';
import defaultImage from '../images/rorschach.jpg';
// const API_URL = 'http://localhost:4000/api/v1/users';
// const userId = '5ccbca39b2d97f4887531faa'
import fakeUser from '../fakeUser'


class Profile extends Component {
    state = {
        response: fakeUser
    }


    // getUser = () => {
    //     axios.get(`${API_URL}/${userId}`)
    //     .then((res) => {
    //         console.log(res)
    //         this.setState({
    //             response: res.data
    //         });
    //     })
    // }

    // componentDidMount = () => {
    //     this.getUser()
    // }

    editProfile = event => {
        event.preventDefault();
        if(this.state.response){
            console.log(` 
            EDIT PROFILE:
            name: "${this.state.response.data.name}"
            currentCity: "${this.state.response.data.currentCity}"
            `)
        } 
    }

    render(){
        console.log(this.state.response)
        let profile = 'profile';
        let posts = [];
        let user;
        if(this.state.response){
            // console.log('get it')
            user = this.state.response;
            // console.log('user:', user)
            // console.log('name:', (user ? user.name : 'nothing'))
            profile = (
            <div className="intro">
                <h1>{user ? user.name : 'no one yet'}</h1>
                <h2>{user ? user.currentCity : 'nowhere at all'}</h2>
                <h4>{user ? 'joined ' + user.joinDate.slice(0, 10) : 'nowhere at all'}</h4>
            </div>)
            
            posts = user ? user.posts : [{user: false}];

        }
        return(
            <div>
                <Container>
                    <Row>
                        <Col>{profile}</Col>
                        <Col><Image src={defaultImage} roundedCircle/></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col>
                            <button className="btn btn-warning" onClick={this.editProfile}>Create New Post</button>
                        </Col>
                    </Row>
                
                <PostContainer info={posts} user={user ? user.name.split(' ')[0] : 'User'}/>
                </Container>
            </div>
        )
    }
}





export default Profile