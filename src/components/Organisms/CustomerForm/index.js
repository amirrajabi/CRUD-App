import React, { Component } from 'react';
import { connect } from 'react-redux';

import createCustomer from '../../../store/customer/actions';

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
        if (!this.state.firstName || !this.state.lastName || !this.state.dob) return;
        const { firstName, lastName, dob } = this.state;
        this.props.createCustomer({
            id: this.props.customers.length + 1,
            firstName,
            lastName,
            dob,
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                />

                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                />

                <label>Date Of Birth</label>
                <input
                    type="text"
                    name="dob"
                    value={this.state.dob}
                    onChange={this.handleInputChange}
                />

                <button>Add new Customer</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    customers: state.customer.customers,
});

const mapDispatchToProps = dispatch => ({
    createCustomer: () => dispatch(createCustomer()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CustomerForm);
