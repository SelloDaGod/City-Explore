import Weather from "./weather"
import './App.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';
import Movie from "./Movie";
function App() {
  let enteredText = ""
  const [displaystring, setdisplaystring] = useState("");
  const [cityData, setcityData] = useState({});
  const [Error, setError] = useState("");
  const [weatherData, setweatherData] = useState([]);
  const [movies, setMovies] = useState([])


  let imgeurl = `https://maps.locationiq.com/v3/staticmap?key=Pk.2d58b10b20f70a2b5002be8c85d5bdce&center=${cityData.lat},${cityData.lon}&zoom=12`
  function weather() {
    let response = axios.get(`${process.env.REACT_APP_CITYEXPLORERAPI}/weather?lat=${cityData.lat}&lon=${cityData.lon}&searchQuery=${enteredText}`)
    response.then(function (res) {
      let weatherData = res.data
      setweatherData(res.data)
      console.log(res)
    }).catch(function (error) {
      console.log(error.message)
      setError(error.message)
    })
    console.log(response)
    let moviesResponse = axios.get(`${process.env.REACT_APP_CITYEXPLORERAPI}/movies?movie=Memphis`)
    moviesResponse.then(function (res) {
      console.log(res.data)
      setMovies(res.data)
    }).catch(function (error) {
      console.log(error.message)
      setError(error.message)
    })
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
          }).catch(function (error) {
            console.log(error.message)
            setError(error.message)
          })
          weather()

        }}>Submit</Button>
        {Error}
        <h1>{displaystring}</h1>
        <Card style={{ width: '18rem' }}><Card.Img src={imgeurl} /> </Card>

        <Weather weatherData={weatherData} />

        <Movie movies={movies} />

      </header>
    </div>
  );
}

export default App;
