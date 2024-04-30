import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [forecasts, setForecasts] = useState();

    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = forecasts === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>

                    <th>description</th>
                    <th>status</th>
                    <th>complexity</th>
                    <th>photoId</th>
                    <th>Deadline</th>


                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.id}>
                        <td>{forecast.description}</td>
                        <td>{forecast.status}</td>
                        <td>{forecast.complexity}</td>
                        <td>{forecast.photoId}</td>
                        <td>{forecast.deadline}</td>

                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tabelLabel">Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );
    
    async function populateWeatherData() {
        await fetch('https://localhost:7263/api/tasks/')
            .then(response => response.json())
            .then(console.log)
            .then(forecasts)
        const response = await fetch('https://localhost:7263/api/tasks/');
        const data = await response.json();
        setForecasts(data);
        
    }
}

export default App;