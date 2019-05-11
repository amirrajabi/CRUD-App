import React, { Component, Fragment } from 'react';
import { Table, Form, Button, Row, Col } from 'react-bootstrap';

class CustomerTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <Fragment>
                <Form>
                    <Row>
                        <Col sm={9}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Search..." />
                                <Form.Text className="text-muted">
                                    Searching in customers list.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col sm={3}>
                            <Button variant="secondary">Search</Button>
                        </Col>
                    </Row>
                </Form>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Date of birth</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.customers.length > 0 ? (
                            this.props.customers.map(customer => (
                                <tr key={customer.id}>
                                    <td>{customer.firstName}</td>
                                    <td>{customer.lastName}</td>
                                    <td>{customer.dob}</td>
                                    <td>
                                        <Button
                                            size="sm"
                                            variant="info"
                                            onClick={() => {
                                                this.props.handleEdit(customer);
                                            }}>
                                            Edit
                                        </Button>{' '}
                                        <Button
                                            size="sm"
                                            variant="danger"
                                            onClick={() => {
                                                this.props.handleDelete(customer.id);
                                            }}>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3}>No customers</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Fragment>
        );
    }
}

export default CustomerTable;
