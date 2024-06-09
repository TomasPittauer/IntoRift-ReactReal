import React from 'react';
import { data } from './data';
import './App.css';
import {Link} from "react-router-dom";

function Strategy({ match }) {
    const strategyId = match.params.id;
    const strategy = data.find(strategy => strategy.Id === parseInt(strategyId));

    function goBack() {
        window.location.href = `/`;
    }

    return (

        <div className="strategy-details">
            <Link className={"goBackButton"} to={'/'}>
                <button onClick={() => goBack()}>Go Back</button>
            </Link>
            <h2>{strategy.Name}</h2>
            <p>Description: {strategy.description}</p>
            <p>Summoner Spells: {strategy.summonerSpell1}, {strategy.summonerSpell2}</p>
            <p>Rating: {strategy.rating}</p>
            <p>Rating: {strategy.build}</p>
            <p>Rating: {strategy.items}</p>

            {/* Add more fields as needed */}
        </div>
    );
}

export default Strategy;
