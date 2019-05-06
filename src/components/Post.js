import React, { Component } from "react";
import { ListGroup, Container, Row, Col, Button, Collapse } from 'react-bootstrap';
import travel03 from '../images/travel03.jpeg';


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
          <ListGroup.Item className="box" action variant={`${this.props.color}`}
              onClick={console.log('you pushed ' + this.props.post)}>
         
            <Row className="post-box">
                    <Col><img src={travel03} alt="travel"
                  width='400px' height='200px' /></Col>
                 <hr></hr>
                  <Col id="city-text"><h4>{this.props.post.title}</h4>
            <p>{abridged(this.props.post.content)}</p></Col>
                </Row>
          </ListGroup.Item>
        </div>
        );
    }
  }


    export default Post;
    