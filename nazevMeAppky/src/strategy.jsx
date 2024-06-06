import React from 'react';
import { data } from './data';
import './App.css';

function Strategy({ match }) {
    const strategyId = match.params.id;
    const strategy = data.find(strategy => strategy.Id === parseInt(strategyId));

    return (
        <div className="strategy-details">
            <h2>{strategy.Name}</h2>
            <p>Description: {strategy.description}</p>
            <p>Summoner Spells: {strategy.summonerSpell1}, {strategy.summonerSpell2}</p>
            <p>Rating: {strategy.rating}</p>
            {/* Add more fields as needed */}
        </div>
    );
}

export default Strategy;
