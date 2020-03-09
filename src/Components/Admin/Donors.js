import React, { Component } from 'react'
import { Container,
    Col,
    Row } from 'reactstrap'

export default class Donors extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="2">
                    </Col>

                    <Col xs="10" className="verticalNavigation2">
                       <p className="paraAdmin">hello, this is Donors page in which all the Donors can managed by admin</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
