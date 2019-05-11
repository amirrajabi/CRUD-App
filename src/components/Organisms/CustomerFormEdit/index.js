import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import { editCustomer } from '../../../store/customer/actions';

class CustomerFormEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.customer.id,
            firstName: this.props.customer.firstName,
            lastName: this.props.customer.lastName,
            dob: this.props.customer.dob,
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (!this.state.firstName || !this.state.lastName || !this.state.dob) return;
        const { firstName, lastName, dob, id } = this.state;
        let editCustomer = {
            id,
            firstName,
            lastName,
            dob,
        };
        this.props.editCustomer(editCustomer);
        this.props.edited();
        this.setState({ id: null, firstName: '', lastName: '', dob: '' });
    };

    render() {
        return (
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
                    Edit Customer
                </Button>
            </Form>
        );
    }
}

const mapStateToProps = state => ({
    customers: state.customerReducer.customers,
});

const mapDispatchToProps = dispatch => ({
    editCustomer: newCustomer => dispatch(editCustomer(newCustomer)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CustomerFormEdit);
