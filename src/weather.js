import { Card } from "react-bootstrap"

function Weather(props){
    let array = []
    for (let index = 0; index < props.weatherData.length; index++) {
        const element = <p>{props.weatherData[index].description}</p>
        const Water = <p>{props.weatherData[index].date}</p>
    array.push(element,Water)
     
    }
    return (
        <Card> <div> {array} </div> </Card>
    )
}

export default Weather