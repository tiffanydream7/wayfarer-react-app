import React, { Component } from 'react';
import axios from 'axios';
import PostContainer from './PostContainer';
import { Container, Col, Row, Image, Modal } from 'react-bootstrap';
import defaultImage from '../images/rorschach.jpg';
// const userId = '5ccbca39b2d97f4887531faa'
import fakeUser from '../fakeUser';
import Example from './Modals/Modal';
import UserModel from '../models/UserModel';
const API_URL = 'https://teamblueapi.herokuapp.com/api/v1/users';


class Profile extends Component {
    state = {
        response: fakeUser
    }

    


    getUser = () => {
        // axios.get(`${API_URL}/${this.props.userId}`)
        UserModel.getProfile(this.props.match.params.userId)
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

    editProfile = updatedUser => {
        this.setState({
            updatedUser
        })
    }

    sttata = () => {
        console.log(this.state)
    }

    render(){

        const { userId } = this.props.match.params;
          console.log('match id: ', userId)
          console.log('match', this.props.match )

        console.log(this.state.response)
        let profile = 'profile';
        let posts = [];
        let user;
        if(this.state.response){
            // console.log('get it')
            user = this.state.response;
            console.log('profile user: ', user)
            // console.log('user:', user)
            // console.log('name:', (user ? user.name : 'nothing'))
            profile = (
            <div className="intro">
                <h1>{user ? user.username : 'no one yet'}</h1>
                <h2>{user ? user.currentCity : 'nowhere at all'}</h2>
                <h4>{user ? 'joined ' + user.joinDate.slice(0, 10) : 'no join'}</h4>
                <Example form="Edit Profile" editUser={this.editProfile} userInfo={user ? user : {user: null}}/>

            </div>)
            
            posts = user ? user.posts : [{user: false}];

        }
        return(
            <div>
                {/* <Container> */}
                    <Row>
                        <Col>{profile}</Col>
                        <Col><img src={defaultImage} onClick={this.sttata} className="profile-photo" /></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col>
                            <Example form="Create New Post" user={user ? userId : 'whatever'} />
                            {/* <Example form="Create New Post" className="btn btn-warning" /> */}
                        </Col>
                    </Row>
                
                {/* <PostContainer info={posts} user={user ? user.name.split(' ')[0] : 'User'}/>
                </Container> */}
            </div>
        )
    }
}





export default Profile