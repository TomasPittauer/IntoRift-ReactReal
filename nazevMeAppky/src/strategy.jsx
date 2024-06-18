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
            <h2 className={"strategyName"}>{strategy.Name}</h2>
            <p className={"role"}>{strategy.Lane}</p>
            <p className={"description"}>{strategy.description}</p>
            <div className={"infoBox"}>
                <p className={"summonerSpellsBig"}>Summoner Spells:</p>
                <p className={"summonerSpells"}>{strategy.summonerSpell1}, {strategy.summonerSpell2}</p>
                <p className={"buildBig"}>Build:</p>
                <p className={"build"}>{strategy.build}</p>
                <p className={"runesBig"}>Runes:</p>
            <p className={"runes"}>{strategy.runes}</p>
            </div>
            <p className={"rating"}>Rating: {strategy.rating} / 5</p>
            <button className={"addFavouriteButton"} onClick={() => addFavourite(strategy)}>Add to Favourite</button>
        </div>
    );
}

export default Strategy;
