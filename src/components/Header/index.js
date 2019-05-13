import React from 'react';
import { Row, Col, Jumbotron } from 'react-bootstrap';

const Header = () => {
    return (
        <Row>
            <Col xs={12}>
                <Jumbotron>
                    <h1>Amir Rajabi</h1>
                    <small style={{ display: 'block' }}>CRUD App With React</small>
                    <small>{new Date().toLocaleDateString()}</small>
                </Jumbotron>
            </Col>
        </Row>
    );
};

export default Header;
