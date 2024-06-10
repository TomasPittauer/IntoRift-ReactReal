import React from 'react';
import { data } from './data';
import { Link } from 'react-router-dom';
import './App.css';

function Strategy({ match, addFavourite }) {
    const strategyId = match.params.id;
    const strategy = data.find(strategy => strategy.Id === parseInt(strategyId));

    function handleClick() {
        window.location.href = `/`;
    }

    return (
        <div className="strategy-details">
            <Link className={"goBackButton"} to={'/'}>
                <button onClick={() => handleClick()}>Go Back</button>
            </Link>
            <h2>{strategy.Name}</h2>
            <p>Description: {strategy.description}</p>
            <p>Summoner Spells: {strategy.summonerSpell1}, {strategy.summonerSpell2}</p>
            <p>Rating: {strategy.rating}</p>
            <p>Build: {strategy.build}</p>
            <button className={"addFavouriteButton"} onClick={() => addFavourite(strategy)}>Add to Favourite</button>
        </div>
    );
}

export default Strategy;
