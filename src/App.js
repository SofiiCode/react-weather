
import './App.css';
import Weather  from './Weather';
function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather defaultCity="Berlin" />
      <footer className="coder">
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/sofiia-andrusyshyn-31b38324b/"
          target="_blank"
          rel="noreferrer"
        >
          Sofiia Andrusyshyn{" "}
        </a>
        and is open-soursed on{" "}
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
