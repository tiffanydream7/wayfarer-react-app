import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import { Container, Row, Col, Cards } from 'react-bootstrap';
import { Route, Link, Switch, withRouter } from 'react-router-dom';


    class MainPage extends Component {
        render() {
          const { userId } = this.props.match.params;

            return (
                // <Container className="">
                <Row>
                  <Col id="my-sidebar"><Sidebar /></Col>
                  <Col xs={8}>
                    <div className="profile-margin">
                      <Profile userId={userId}/>
                    </div>
                  </Col>
                </Row>
              //  </Container>
            );
        }
    }


    export default withRouter(MainPage);
    