import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import { Container, Row, Col, Cards, Button } from 'react-bootstrap';

    class NavContainer extends Component {
        render() {
            return (
                // <Container className="">
                <Row>
                  <Col><Sidebar /></Col>
                  <Col xs={8}><Profile /></Col>
                </Row>
              // </Container>
            );
        }
    }


    export default NavContainer;
    