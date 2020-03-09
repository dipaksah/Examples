import React, { Component } from 'react'
import {
    Row,Container,Col
} from 'reactstrap'

export default class AdminProfile extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="2">
                    </Col>

                    <Col xs="10" className="verticalNavigation2">
                    <p className="paraAdmin">this is profile page</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
