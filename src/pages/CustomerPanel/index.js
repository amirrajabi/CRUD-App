import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomerTable from '../../components/Organisms/CustomerTable';
import CustomerForm from '../../components/Organisms/CustomerForm';
import { deleteCustomer, editCustomer } from '../../store/customer/actions';

import './styles.scss';

class CustomerPanel extends Component {
    handleEdit = id => {
        this.props.editCustomer(id);
    };

    handleDelete = id => {
        this.props.deleteCustomer(id);
    };

    render() {
        return (
            <div className="customer">
                <div className="flex-row">
                    <div className="flex-small">
                        <h2>Add user</h2>
                        <CustomerForm />
                    </div>
                    <div className="flex-large">
                        <h2>View users</h2>
                        <CustomerTable
                            customers={this.props.customers}
                            handleEdit={this.handleEdit}
                            handleDelete={this.handleDelete}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    customers: state.customerReducer.customers,
    currentCustomer: state.customerReducer.currentCustomer,
});

const mapDispatchToProps = dispatch => ({
    deleteCustomer: id => dispatch(deleteCustomer(id)),
    editCustomer: id => dispatch(editCustomer(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CustomerPanel);
