import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Create a form element
    const form = document.createElement("form");
    form.method = "POST";
    form.action = process.env.APP_URL;

    // Add a hidden input field to hold the data
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "token"; // Replace with the actual field name for your data
    input.value = "Hello from SSO"; // Convert your data to JSON and set as value

    // Append the input to the form and add the form to the document
    form.appendChild(input);
    document.body.appendChild(form);

    // Submit the form
    form.submit();
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
