import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Table, Form, Button, Row, Col } from 'react-bootstrap';

import { searching } from '../../../store/customer/actions';

class CustomerTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            customers: [],
        };
    }

    componentDidMount() {
        this.props.searching(this.state.search, this.props.customers);
    }

    handleSearch = event => {
        event.preventDefault();
        this.props.searching(this.state.search, this.props.customers);
        this.setState({ search: '' });
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <Fragment>
                <Form onSubmit={this.handleSearch}>
                    <Row>
                        <Col sm={9}>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="search"
                                    value={this.state.search}
                                    onChange={this.handleInputChange}
                                    placeholder="Search..."
                                />
                                <Form.Text type="text" className="text-muted">
                                    Searching in customers list.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col sm={3}>
                            <Button variant="secondary" type="submit">
                                Search
                            </Button>
                        </Col>
                    </Row>
                </Form>
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
                                            }}>
                                            Edit
                                        </Button>{' '}
                                        <Button
                                            size="sm"
                                            variant="danger"
                                            onClick={() => {
                                                this.props.handleDelete(customer.id);
                                            }}>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3}>No customers</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
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
