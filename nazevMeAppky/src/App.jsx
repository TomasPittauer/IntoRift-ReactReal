import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import LanePage from './page.jsx';
import Strategy from './strategy.jsx';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/lane" component={LanePage} />
                <Route path="/strategy/:id" component={Strategy} />
            </Switch>
        </Router>
    );
}

export default App;
