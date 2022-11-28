import logo from "./logo.svg";
import ReactDOM from "react-dom/client";
import "./App.css";
import React from "react";

function App() {
  const root = ReactDOM.createRoot(document.getElementById("root")); //Va a buscar el div con ID root

  let localTime = new Date();
  let qatar = new Date(localTime.getTime() + 360000 * 9);
  const titulo = React.createElement("h1", {}, "La hora es:");
  root.render(titulo);

  const element = (
    <div className="App">
      <header className="App-header">
        <h1>La hora es:</h1>
        <h2>
          {" "}
          En México <br></br> {new Date().toLocaleTimeString("es-MX")}
        </h2>
        <h2>
          {" "}
          En Estados Unidos <br></br> {new Date().toLocaleTimeString("en-US")}
        </h2>
        <h2>
          {" "}
          En QATAR <br></br> {qatar.toLocaleTimeString("es-MX")}
        </h2>
      </header>
    </div>
  );
  root.render(element);
}
export default App;
