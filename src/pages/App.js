import React from 'react';
import { Container, Row, Jumbotron } from 'react-bootstrap';

import Customer from './CustomerPanel';

const App = () => {
    return (
        <Container>
            <Row>
                <Jumbotron>
                    <h1>Alinta Energy</h1>
                    <p>This is a Code Test for Alinta Energy.</p>
                    <small>Amir Rajabi</small>
                </Jumbotron>
            </Row>
            <Customer />
        </Container>
    );
};

export default App;
