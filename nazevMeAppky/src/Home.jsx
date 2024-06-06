import React from 'react';
import './App.css';

function Home() {
    function handleClick(lane) {
        window.location.href = `/lane?lane=${lane}`;
    }

    return (
        <>
            <div className="search">
                <div className="strategyName">Search for strategy name</div>
                <input className="searchInput" placeholder="Search" type="text" />
            </div>
            <div className="laneChooser">
                <button className="topButton" onClick={() => handleClick('Top')}>Top</button>
                <button className="jungleButton" onClick={() => handleClick('Jungle')}>Jungle</button>
                <button className="midButton" onClick={() => handleClick('Mid')}>Mid</button>
                <button className="bottomButton" onClick={() => handleClick('Bottom')}>Bottom</button>
                <button className="supportButton" onClick={() => handleClick('Support')}>Support</button>
            </div>
        </>
    );
}

export default Home;
