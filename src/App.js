import Weather from "./weather"
import './App.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';
function App() {
  let enteredText = ""
  const [displaystring, setdisplaystring] = useState("");
  const [cityData, setcityData] = useState({});
  const [Error, setError] = useState("");
  const [weatherData, setweatherData] = useState([]);
  let imgeurl = `https://maps.locationiq.com/v3/staticmap?key=Pk.2d58b10b20f70a2b5002be8c85d5bdce&center=${cityData.lat},${cityData.lon}&zoom=12`
  function weather() {
    let response = axios.get(`http://localhost:3001/weather?lat=${cityData.lat}&lon=${cityData.lon}&searchQuery=${enteredText}`)
    response.then(function (res) {
      let weatherData = res.data
      setweatherData(res.data)
      console.log(res)
    })
    console.log(response)
  }
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
            setcityData(cityData)
            weather()
          }).catch(function (error) {
            console.log(error.message)
            setError(error.message)
          })
        }}>Submit</Button>
        {Error}
        <h1>{displaystring}</h1>
        <Card style={{ width: '18rem' }}><Card.Img src={imgeurl} /> </Card>

<Weather weatherData={weatherData}/>



      </header>
    </div>
  );
}

export default App;
