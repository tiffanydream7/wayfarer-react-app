import React, { Component } from "react";
import Post from "./Post";
import { Container, Row, Col, Button, Collapse, ListGroup } from 'react-bootstrap';


    class PostContainer extends Component {
        colors = [ 'success', 'danger', 'warning', 'info', 'light', 'dark']

        render(){
            let posts;
            if(this.props.info.length){
                posts = this.props.info.map((post, key) => {
                    return (
                        <section key={key}>
                            <ListGroup >
                                <Post
                                    post={post}
                                    color={this.colors[key]}
                                />
                            </ListGroup>
                        </section>
                    )
                })
            }
            return(
                <div>
                    <h3>Posts by {this.props.user}</h3>
                    {posts}
                </div>
            )
        }
    }
    


    export default PostContainer;
    