import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import { Container, Row, Col, Cards } from 'react-bootstrap';

    class MainPage extends Component {
        render() {
            return (
                <Container>
                <Row>
                  <Col><Sidebar /></Col>
                  <Col xs={8}><Profile /></Col>
                </Row>
              </Container>
            );
        }
    }


    export default MainPage;
    