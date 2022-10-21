
import './App.css';
import Weather  from './Weather';
function App() {
  return (
    <div className="App">
     <h1>Weather App</h1>
      <Weather />
      <footer className="coder">
        This project was coded by Sofiia Andrusyshyn and is open-soursed on{" "}
        <a
          href="https://github.com/SofiiCode/react-weather.git"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
      </footer>
    </div>
  );
}

export default App;
