import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Wroclaw" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://eloquent-starship-6a264d.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Hanna Velychko
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/HannaVelychko/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
