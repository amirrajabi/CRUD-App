import React, { Component } from 'react';
import { connect } from 'react-redux';

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

                <button>Edit Customer</button>
            </form>
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
