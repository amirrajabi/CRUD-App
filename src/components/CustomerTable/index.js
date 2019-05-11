import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Table, Modal, Button, Badge } from 'react-bootstrap';

import { searching } from '../../store/customer/actions';
import SearchForm from '../SearchForm';

class CustomerTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            customer: {},
            show: false,
        };
    }

    componentDidMount() {
        this.props.searching(this.state.search, this.props.customers);
    }

    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = customer => {
        this.setState({
            show: true,
            customer,
        });
    };

    handleDelete = () => {
        this.setState({
            show: false,
        });
        this.props.handleDelete(this.state.customer.id);
    };

    render() {
        return (
            <Fragment>
                <h3>
                    <Badge variant="secondary">Customers</Badge>
                </h3>
                <SearchForm />
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
                        {this.props.customersList.length > 0 ? (
                            this.props.customersList.map(customer => (
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
                                            }}
                                            style={{ marginRight: 10 }}>
                                            Edit
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="danger"
                                            onClick={() => {
                                                this.handleShow(customer);
                                            }}>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4}>No result found!</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete customer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {`Are you sure you want to delete ${this.state.customer.firstName} ${
                            this.state.customer.lastName
                        }?`}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.handleDelete}>
                            Delete
                        </Button>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    customersList: state.customerReducer.customersList,
});

const mapDispatchToProps = dispatch => ({
    searching: (search, customers) => dispatch(searching(search, customers)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CustomerTable);
