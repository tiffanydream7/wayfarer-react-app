import React, { Component } from "react";
import { ListGroup, Container, Row, Col, Button, Collapse } from 'react-bootstrap';
import { logo } from '../images/logo.png';


    class Post extends Component {
        // state = {
        //     open: false
        // }

        // toggleCollapse = () => {
        //     this.setState((prevState) => ({
        //         open: !prevState.open
        //       }));
        // }

    render() {

      const abridged = content => {
        const contArray = content.split(' ');
        let shorty = contArray[0];
        for(let i = 1; i < 50; i++){
          shorty += ' ' + contArray[i]
        }
          return shorty + '...'
        };
        return (
        <div>
            <ListGroup.Item action variant={`${this.props.color}`}
          // onClick={this.toggleCollapse}
          onClick={console.log('you pushed ' + this.props.post)}
          // aria-controls="example-collapse-text"
          // aria-expanded={this.state.open}
        >
        {logo}
        <h4>{this.props.post.title}</h4>
        <p>{abridged(this.props.post.content)}</p>
        </ListGroup.Item>
        {/* <Collapse in={this.state.open}>
          <div id="example-collapse-text">
          <p>{this.props.post.content}</p>
          </div>
        </Collapse> */}
        </div>
        );
    }
    }


    export default Post;
    