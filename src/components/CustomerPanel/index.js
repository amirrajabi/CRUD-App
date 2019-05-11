import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import CustomerTable from '../CustomerTable';
import CustomerForm from '../CustomerForm';
import CustomerFormEdit from '../CustomerFormEdit';
import { deleteCustomer, editCustomer } from '../../store/customer/actions';

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
        const { currentCustomer } = this.state;
        return (
            <Row className="customer">
                <Col xs={12} md={4}>
                    {currentCustomer.firstName !== undefined ? (
                        <CustomerFormEdit customer={currentCustomer} edited={this.handelForm} />
                    ) : (
                        <CustomerForm />
                    )}
                </Col>
                <Col xs={12} md={8}>
                    <CustomerTable
                        customers={this.props.customers}
                        handleEdit={this.handleEdit}
                        handleDelete={this.handleDelete}
                    />
                </Col>
            </Row>
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
