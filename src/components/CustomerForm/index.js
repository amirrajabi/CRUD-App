import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Badge } from 'react-bootstrap';

import { createCustomer } from '../../store/customer/actions';

class CustomerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            firstName: '',
            lastName: '',
            dob: '',
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { firstName, lastName, dob } = this.state;
        if (!firstName || !lastName || !dob) return;
        let id = `${new Date().toLocaleTimeString()}${new Date().toLocaleDateString()}`;
        let newCustomer = {
            id,
            firstName,
            lastName,
            dob,
        };
        this.props.createCustomer(newCustomer);
        this.setState({ id: null, firstName: '', lastName: '', dob: '' });
    };

    render() {
        return (
            <Fragment>
                <h3>
                    <Badge variant="secondary">Add new customer</Badge>
                </h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                            placeholder="First name"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                            placeholder="Last name"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Date of birth</Form.Label>
                        <Form.Control
                            type="date"
                            name="dob"
                            value={this.state.dob}
                            onChange={this.handleInputChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Form>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    customers: state.customerReducer.customers,
});

const mapDispatchToProps = dispatch => ({
    createCustomer: newCustomer => dispatch(createCustomer(newCustomer)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CustomerForm);
