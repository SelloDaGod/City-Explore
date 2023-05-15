import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';
function App() {
  let enteredText = ""
  const [displaystring, setdisplaystring ] = useState("")
  return (
    <div className="App">
      <header className="App-header">
        <Form.Label htmlFor="inputPassword5">City Name</Form.Label>
        <Form.Control
          onChange={function (event) {
            // console.log(event.target.value)
            enteredText = event.target.value
          }}
          type="text"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
        />
        <Button onClick={function () {
          console.log(enteredText)
          let response = axios.get(`https://us1.locationiq.com/v1/search?key=pk.2d58b10b20f70a2b5002be8c85d5bdce&q=${enteredText}&format=json`)
          response.then(function (res) {
            let cityData = res.data[0]
            console.log(cityData)
            setdisplaystring(cityData.display_name + cityData.lat + cityData.lon)


          })
        }}>Submit</Button>

        <h1>{displaystring}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          cityRes
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
