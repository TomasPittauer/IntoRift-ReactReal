import './App.css'
import { useHistory } from 'react-router-dom';

function App() {

    const history = useHistory();

    function handleClick() {
        history.push('/about');
    }
    return (
        <>
            <div className={"search"}>
                <div className={"strategyName"}>Search for strategy name</div>
                <input className={"searchInput"} placeholder={"Search"} type={"text"}/>
            </div>
            <div className={"laneChooser"}>
                <button className={"topButton"}>Top</button>
                <button className={"jungleButton"}>Jungle</button>
                <button className={"midButton"}>Mid</button>
                <button className={"bottomButton"}>Bottom</button>
                <button className={"supportButton"}>Support</button>
            </div>
        </>
    )
}
export default App