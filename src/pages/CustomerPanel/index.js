import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomerTable from '../../components/Organisms/CustomerTable';
import CustomerForm from '../../components/Organisms/CustomerForm';
import { deleteCustomer, editCustomer } from '../../store/customer/actions';

import './styles.scss';

class CustomerPanel extends Component {
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
                        {console.log(this.props.customers)}
                        <CustomerTable
                            customers={this.props.customers}
                            deleteCustomer={this.props.deleteCustomer}
                            editCustomer={this.props.editCustomer}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    customers: state.customerReducer.customers,
});

const mapDispatchToProps = dispatch => ({
    deleteCustomer: () => dispatch(deleteCustomer()),
    editCustomer: () => dispatch(editCustomer()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CustomerPanel);
