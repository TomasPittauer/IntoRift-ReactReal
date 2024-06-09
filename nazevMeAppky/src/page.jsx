import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './App.css';
import { data } from './data.jsx'; // Import the data

function LanePage() {
    const location = useLocation();
    const lane = new URLSearchParams(location.search).get('lane');
    const filteredData = data.filter(item => item.Lane.toLowerCase() === lane.toLowerCase());

    function handleClick(strategyId) {
        window.location.href = `/strategy/${strategyId}`;
    }
    function goBack() {
        window.location.href = `/`;
    }

    return (
        <div className={"lanePage"}>
            <Link className={"goBackButton"} to={'/'}>
                <button onClick={() => goBack()}>Go Back</button>
            </Link>
            <h1 className={"bigText"}>{lane} Page</h1>
            <ul className="strategyList">
                {filteredData.length > 0 ? (
                    filteredData.map(item => (
                        <li key={item.Id} className="strategyItem">
                            <h2>{item.Name}</h2>
                            <p>{item.description}</p>
                            <p>Summoner Spells: {item.summonerSpell1}, {item.summonerSpell2}</p>
                            <p>Rating: {item.rating}</p>
                            <Link className="viewButton" to={`/strategy/${item.Id}`}>
                                <button onClick={() => handleClick(item.Id)}>View Strategy</button>
                            </Link>
                        </li>
                    ))
                ) : (
                    <p>No strategies found for {lane} lane.</p>
                )}
            </ul>
        </div>
    );
}

export default LanePage;
