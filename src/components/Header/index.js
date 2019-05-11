import React from 'react';
import { Row, Col, Jumbotron } from 'react-bootstrap';

const Header = () => {
    return (
        <Row>
            <Col xs={12}>
                <Jumbotron>
                    <h1>Alinta Energy</h1>
                    <small style={{ display: 'block' }}>Alinta Energy code test.</small>
                    <small style={{ display: 'block' }}>Amir Rajabi</small>
                    <small>{new Date().toLocaleDateString()}</small>
                </Jumbotron>
            </Col>
        </Row>
    );
};

export default Header;
