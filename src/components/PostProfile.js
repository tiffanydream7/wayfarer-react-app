import React, { Component } from 'react';
import axios from 'axios';
import PostContainer from './PostContainer';
import { Container, Col, Row, Image, Modal } from 'react-bootstrap';
// import defaultImage from '../images/rorschach.jpg';
// const userId = '5ccbca39b2d97f4887531faa'
import Example from './Modal/Modal';
import PostModel from '../models/PostModel';


class PostProfile extends Component {
    state = {
        response: null
    }


    getUser = () => {
        // axios.get(`${API_URL}/${this.props.userId}`)
        PostModel.getPost('5ccfbd1115734c000c585168')
        // PostModel.getPost(this.props.userPost)
        .then((res) => {
            console.log('post axios:',res.data)
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
        if(this.state){console.log('in render:', this.state.response)}
        let profile = 'profile';
        let content = 'this story is blank';
        let defaultImage;
        // let user = 'anon';
        let post;
        if(this.state.response){
            // console.log('get it')
            post = this.state.response;
            // console.log('user:', user)
            // console.log('name:', (user ? user.name : 'nothing'))
            profile = (
            <div className="intro">
                <h1>{post ? post.title : 'no one yet'}</h1>
                <h2>by {post ? post.user : 'anon'}</h2>
                <h3>in {post ? post.city : 'world globe'}</h3>
                {/* <h4>on {post ? post.joinDate : 'saturday i think ?'}</h4> */}
                <h4> on {post ? post.joinDate.slice(0, 10) : 'saturday i think ?'}</h4>
            </div>)
            
            content = post ? post.content : [{post: false}];
            defaultImage = post.photo;
             }
        return(
            <div> 
                {/* <Container> */}
                    <Row>
                        <Col>{profile}</Col>
                        <Col><img src={defaultImage} onClick={this.sttata} className="profile-photo"/></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col>
                            <Example form="Create New Post" className="btn btn-warning" />
                        </Col>
                    </Row>
                    <p>{content}</p>
                
                {/* <PostContainer info={posts} user={user ? user.name.split(' ')[0] : 'User'}/>
                </Container> */}
            </div>
        )
    }
}



export default PostProfile;