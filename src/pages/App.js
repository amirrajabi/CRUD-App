import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

import Customer from './CustomerPanel';

const App = () => {
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <Jumbotron>
                        <h1>Alinta Energy</h1>
                        <p>This is a Code Test for Alinta Energy.</p>
                        <small>Amir Rajabi</small>
                    </Jumbotron>
                </Col>
            </Row>
            <Customer />
        </Container>
    );
};

export default App;
