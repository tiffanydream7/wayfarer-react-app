import React, { Component } from "react";
import { ListGroup, Container, Row, Col, Button, Collapse } from 'react-bootstrap';


    class Post extends Component {
        state = {
            open: false
        }

        toggleCollapse = () => {
            this.setState((prevState) => ({
                open: !prevState.open
              }));
        }

    render() {
        return (
        <div>
            <ListGroup.Item action variant={`${this.props.color}`}
          onClick={this.toggleCollapse}
          aria-controls="example-collapse-text"
          aria-expanded={this.state.open}
        >
        <h4>{this.props.post.title}</h4>
        </ListGroup.Item>
        <Collapse in={this.state.open}>
          <div id="example-collapse-text">
          <p>{this.props.post.content}</p>
          </div>
        </Collapse>
        </div>
        );
    }
    }


    export default Post;
    