import React, { Component } from 'react';
import axios from 'axios';
import PostContainer from './PostContainer';
import { Container, Col, Row, Image, Modal } from 'react-bootstrap';
import defaultImage from '../images/rorschach.jpg';
// const userId = '5ccbca39b2d97f4887531faa'
import fakeUser from '../fakeUser'
import Example from './Modal/Modal'
import UserModel from '../models/UserModel';
const API_URL = 'https://teamblueapi.herokuapp.com/api/v1/users';


class Profile extends Component {
    state = {
        response: fakeUser
    }


    getUser = () => {
        // axios.get(`${API_URL}/${this.props.userId}`)
        UserModel.getProfile(this.props.userId)
        .then((res) => {
            console.log(res.data)
            this.setState({
                response: res.data.data
            });
        })
    }

    componentDidMount = () => {
        this.getUser()
        // alert(this.props.userId)
    }

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

    sttata = () => {
        console.log(this.state)
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
                <h1>{user ? user.username : 'no one yet'}</h1>
                <h2>{user ? user.currentCity : 'nowhere at all'}</h2>
                <h4>{user ? 'joined ' + user.joinDate : 'nowhere at all'}</h4>
                {/* <h4>{user ? 'joined ' + user.joinDate.slice(0, 10) : 'nowhere at all'}</h4> */}
            </div>)
            
            posts = user ? user.posts : [{user: false}];

        }
        return(
            <div>
                {/* <Container> */}
                    <Row>
                        <Col>{profile}</Col>
                        <Col><Image src={defaultImage} onClick={this.sttata} roundedCircle/></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col>
                            <Example form="Create New Post" className="btn btn-warning" />
                        </Col>
                    </Row>
                
                {/* <PostContainer info={posts} user={user ? user.name.split(' ')[0] : 'User'}/>
                </Container> */}
            </div>
        )
    }
}





export default Profile