import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import { Container, Row, Col, Cards } from 'react-bootstrap';
import { Route, Link, Switch, withRouter } from 'react-router-dom';


    class MainPage extends Component {
        render() {
          const { userId } = this.props.match.params;
          console.log('match id: ', userId)
          console.log('match', this.props.match )

            return (
                // <Container className="">
                <Row>
                  <Col id="my-sidebar"><Sidebar /></Col>
                  <Col xs={8}>
                    <div className="profile-margin">
                      <Switch>
                        {/* <Profile userId={userId}/> */}
                        <Route path={this.props.match.url + '/profile/:userId'}  component = { Profile }/> 
                      </Switch>
                    </div>
                  </Col>
                </Row>
              //  </Container>
            );
        }
    }


    export default withRouter(MainPage);
    