import React, { Component } from 'react';

class CustomerTable extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>DOB</th>
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
                                    <button
                                        onClick={() => {
                                            this.props.handleEdit(customer);
                                        }}>
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => {
                                            this.props.handleDelete(customer.id);
                                        }}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3}>No customers</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}

export default CustomerTable;
