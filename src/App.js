import './App.css';
import Weather from './Components/weatherApp/Weather.jsx';

function App() {
  const API_KEY = process.env.REACT_APP_WEATHER_API;
  return (
    <div className="App">
      <Weather apiKey = {API_KEY}/>
    </div>
  );
}

export default App;
