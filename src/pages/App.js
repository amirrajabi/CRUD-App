import React from 'react';

import Customer from './CustomerPanel';

import '../styles/App.scss';

const App = () => {
    return (
        <div className="app">
            <h1>Alinta Energy</h1>
            <Customer />
        </div>
    );
};

export default App;
