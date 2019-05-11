import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomerTable from '../../components/Organisms/CustomerTable';
import CustomerForm from '../../components/Organisms/CustomerForm';
import CustomerFormEdit from '../../components/Organisms/CustomerFormEdit';
import { deleteCustomer, editCustomer } from '../../store/customer/actions';

import './styles.scss';

class CustomerPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCustomer: {},
        };
    }

    handleEdit = customer => {
        this.setState({
            currentCustomer: customer,
        });
    };

    handleDelete = id => {
        this.props.deleteCustomer(id);
    };

    handelForm = () => {
        this.setState({
            currentCustomer: {
                firstName: undefined,
            },
        });
    };

    render() {
        return (
            <div className="customer">
                <div className="flex-row">
                    <div className="flex-small">
                        <h2>Add user</h2>
                        {this.state.currentCustomer.firstName !== undefined ? (
                            <CustomerFormEdit
                                customer={this.state.currentCustomer}
                                edited={this.handelForm}
                            />
                        ) : (
                            <CustomerForm />
                        )}
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
