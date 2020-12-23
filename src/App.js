import React from 'react';
import { HomePage } from './components/pages/homepage.component.jsx';
import { Route, Switch } from 'react-router-dom';

import './App.css';

const HatsPage = () => (
    <div>
        <h1>Hats Page</h1>
    </div>
);

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop/:item" component={HatsPage} />
            </Switch>
        </div>
    );
}

export default App;
