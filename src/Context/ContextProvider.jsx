import React, { useEffect, useContext, createContext, useState } from 'react';
import { iconMap } from './icons.js';

const contexto = createContext()
const { Provider } = contexto




export const useWeather = () => {
    return useContext(contexto)
}

const ContextProvider = ({children}) => {

    const apiKey = import.meta.env.REACT_APP_API_KEY

    
    const [ dataWeather, setDataWeather ] = useState({})
    const [ coords, setCoords ] = useState({})
    const [ icon, setIcon ] = useState()
    const [ compass, setCompass ] = useState()

      
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

    
        const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=sp&lat=${coords.lat}&lon=${coords.long}&exclude=hourly,daily&appid=${apiKey}`


        const fetchDataDaily = async () => {
            if(coords.location) {
            const resp = await fetch(URL)
            const data = await resp.json()
            console.log(data)
                setDataWeather({
                    temp : data.main.temp.toFixed(1),
                    maxTemp : data.main.temp_max.toFixed(1),
                    minTemp : data.main.temp_min.toFixed(1),
                    feels : data.main.feels_like.toFixed(1),
                    windSpeed : (data.wind.speed * 3.6).toFixed(1),
                    windDir : data.wind.deg,
                    humidity : data.main.humidity,
                    pressure : data.main.pressure,
                    sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString("default"),
                    sunset: new Date (data.sys.sunset *1000).toLocaleTimeString("default"),
                    iconCode: Number(data.weather[0].id),
                    message: data.weather[0].main,
                })
            }
        }
            
        fetchDataDaily()
    
        const compassDirections = {
            N: [0, 22],
            NE: [23, 67],
            E: [68, 112],
            SE: [113, 157],
            S: [158, 202],
            SW: [203, 247],
            W: [248, 292],
            NW: [293, 337],
          }
          
          const getCompassDirection = (degrees) => {
            for (const [dir, range] of Object.entries(compassDirections)) {
              if (degrees >= range[0] && degrees <= range[1]) {
                return dir
              }
              if (degrees >= 338 && degrees <= 360){
                return 'N'
              }
            }
          }
          
          const compass = getCompassDirection(dataWeather.windDir)
          setCompass(compass)


        const getIconPath = (code) => {
          const icon = iconMap[code];
          console.log(icon);
          if (icon) {
            return icon;
          }
        };
        
        const icon = getIconPath(dataWeather.iconCode);
        setIcon(icon);


    }, [coords.location, dataWeather.iconCode, dataWeather.windDir]);


    
    const dataValue = {
        data: dataWeather,
        icon: icon,
        compass: compass
    }
    
    


    return (
        <Provider value={dataValue}>
            {children}
        </Provider>
    );
}

export default ContextProvider;
