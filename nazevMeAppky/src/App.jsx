import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home.jsx';
import LanePage from './page.jsx';
import Strategy from './strategy.jsx';

function App() {
    const [favourites, setFavourites] = useState(() => {
        // Retrieve favourites from localStorage if available
        const savedFavourites = localStorage.getItem('favourites');
        return savedFavourites ? JSON.parse(savedFavourites) : [];
    });

    useEffect(() => {
        // Save favourites to localStorage whenever they change
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites]);

    function addFavourite(strategy) {
        setFavourites(prevFavourites => {
            if (!prevFavourites.some(fav => fav.Id === strategy.Id)) {
                return [...prevFavourites, strategy];
            }
            return prevFavourites;
        });
    }

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home favourites={favourites} addFavourite={addFavourite} />
                </Route>
                <Route path="/lane" component={LanePage} />
                <Route
                    path="/strategy/:id"
                    render={(props) => <Strategy {...props} addFavourite={addFavourite} />}
                />
            </Switch>
        </Router>
    );
}

export default App;
