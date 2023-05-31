import { Card } from "react-bootstrap"
import WeatherDay from "./Weatherday"
function Weather(props){
    let array = []
    for (let index = 0; index < props.weatherData.length; index++) {
        // const element = <p>{props.weatherData[index].description}</p>
        // const Water = <p>{props.weatherData[index].date}</p>
        const weatherDay = <WeatherDay date={props.weatherData[index].date} description={props.weatherData[index].description}/>
    array.push(weatherDay)
     
    }
    return (
        <Card> <div> {array} </div> </Card>
    )
}

export default Weather