import "./App.css";
import "./Weather";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://relaxed-mochi-41293f.netlify.app/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Tanya Poroshchai{" "}
          </a>
          and here's the{" "}
          <a
            href="https://github.com/TetianaPo/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open-sourced code on GitHub{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
