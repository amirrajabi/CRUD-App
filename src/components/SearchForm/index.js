import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Row, Col } from 'react-bootstrap';

import { searching } from '../../store/customer/actions';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
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

    handleClear = event => {
        event.preventDefault();
        this.setState({ search: '' });
        this.props.searching(this.state.search, this.props.customers);
    };

    render() {
        return (
            <Form onSubmit={this.handleSearch}>
                <Row>
                    <Col xs={6} sm={7}>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                name="search"
                                value={this.state.search}
                                onChange={this.handleInputChange}
                                placeholder="Search..."
                            />
                            <Form.Text type="text" className="text-muted">
                                Search in customers list.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs={6} sm={5}>
                        <Button variant="success" type="submit" style={{ marginRight: 10 }}>
                            Search
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={this.handleClear}
                            style={{ marginRight: 10 }}>
                            Clear
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

const mapStateToProps = state => ({
    customers: state.customerReducer.customers,
});

const mapDispatchToProps = dispatch => ({
    searching: (search, customers) => dispatch(searching(search, customers)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchForm);
