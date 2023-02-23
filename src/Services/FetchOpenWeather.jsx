import { React, useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import { useWeather } from "../Context/ContextProvider";




const FetchOpenWeather = () => {

    

    const [coords, setCoords ] = useState({})
    const [dataWeather, setDataWeather] = useState({})
       
    useEffect(() => {
        const getLocation = () => {
        navigator.geolocation.getCurrentPosition((response) => {
            setCoords({
                lat : response.coords.latitude,
                long : response.coords.longitude,
                location: true,
            })                       
        })
        }
        getLocation()

        
            const API_KEY = '67012cabd2d783bc6c9ad25a1c27bee2'
            const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=sp&lat=${coords.lat}&lon=${coords.long}&exclude=hourly,daily&appid=${API_KEY}`

            const FetchData = async () => {
                const resp = await fetch(URL)
                const data = await resp.json()
                console.log(data)
                if(coords.location) {
                 setDataWeather({
                    temp : data.main.temp,
                    max : data.main.temp_max,
                    min : data.main.temp_min,
                    wind : data.wind.speed,
                    winDir : data.wind.deg,
                    hum : data.main.humidity,
                    pressure : data.main.pressure,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset,
                })
            }
            }

            FetchData()

    }, [coords.location]);
    

    return (
        <>
        {Object.keys(dataWeather).length === 0 ? <Loading />:
            <div>
            <h2> DATA: </h2> 
            <p>Temperatura: {dataWeather.temp}</p>
            <p>Presion: {dataWeather.pressure}</p>
            </div>
        }
       
        </>
    );
}

export default FetchOpenWeather;



