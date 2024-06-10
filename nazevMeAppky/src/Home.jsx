import React, { useState, useEffect } from 'react';
import { data } from './data';
import { Link } from 'react-router-dom';
import './App.css';

function Home({ favourites, addFavourite }) {
    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [showFavourites, setShowFavourites] = useState(false);

    useEffect(() => {
        if (searchInput.length >= 3) {
            setFilteredData(
                data.filter(strategy =>
                    strategy.Name.toLowerCase().includes(searchInput.toLowerCase())
                )
            );
        } else {
            setFilteredData([]);
        }
    }, [searchInput]);

    function handleClick(lane) {
        window.location.href = `/lane?lane=${lane}`;
    }

    function handleInputChange(event) {
        setSearchInput(event.target.value);
    }

    function toggleFavourites() {
        setShowFavourites(!showFavourites);
    }
    function handleClickStrategy(strategyId) {
        window.location.href = `/strategy/${strategyId}`;
    }

    return (
        <>
            <div className="favouriteBox">
                <button onClick={toggleFavourites}>Favourites {favourites.length}</button>
                {showFavourites && (
                    <div className="favourites">
                        {favourites.map(fav => (
                            <div key={fav.Id}>
                                <Link to={`/strategy/${fav.Id}`}>
                                    <button onClick={() => handleClickStrategy(fav.Id)}>{fav.Name}</button>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="search">
                <div className="strategyName">Search for strategy name</div>
                <input
                    className="searchInput"
                    placeholder="Search"
                    type="text"
                    value={searchInput}
                    onChange={handleInputChange}
                />
            </div>
            <div className="searchOutput">
                {filteredData.length > 0 && searchInput.length >= 3 && (
                    filteredData.map(strategy => (
                        <div key={strategy.Id} className="strategyItem">
                            <h2>{strategy.Name}</h2>
                            <p>{strategy.description}</p>
                            <Link to={`/strategy/${strategy.Id}`}>
                                <button>View Details</button>
                            </Link>
                        </div>
                    ))
                )}
            </div>
            <div className="laneChooser">
                <button className="topButton" onClick={() => handleClick('Top')}>Top</button>
                <button className="jungleButton" onClick={() => handleClick('Jungle')}>Jungle</button>
                <button className="midButton" onClick={() => handleClick('Mid')}>Mid</button>
                <button className="bottomButton" onClick={() => handleClick('ADC')}>Bottom</button>
                <button className="supportButton" onClick={() => handleClick('Support')}>Support</button>
            </div>
        </>
    );
}

export default Home;
