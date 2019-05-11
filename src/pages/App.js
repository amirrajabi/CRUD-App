import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../components/Header';
import CustomerPanel from '../components/CustomerPanel';

const App = () => {
    return (
        <Container>
            <Header />
            <CustomerPanel />
        </Container>
    );
};

export default App;
