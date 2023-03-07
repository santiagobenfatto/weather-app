import React, { useState, useEffect, useContext, createContext } from 'react';
//import { iconMap } from './icons.js';

const contextoForecast = createContext()
const { Provider } = contextoForecast




export const useForecaster = () => {
    return useContext(contextoForecast)
}


const ForecastContextProvider = ({children}) => {


    
    const apiKey = import.meta.env.REACT_APP_API_KEY

    const [ dataForecast, setDataForecast ] = useState([])
    const [ coords, setCoords ] = useState({})
    
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
        
        const URL_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lang=sp&lat=${coords.lat}&lon=${coords.long}&appid=${apiKey}`

        const fetchDataForecast = async () => {
            if(coords.location) {
            const resp = await fetch(URL_FORECAST)
            const forecast_data = await resp.json()
            console.log(forecast_data)
            setDataForecast(forecast_data.list)
            }
        }

        fetchDataForecast()
        console.log(dataForecast)

    }, [coords.location]);
    
    const forecastValue = {
        dataForecast: dataForecast,
    }
    
    
    
    return (
        <Provider value={forecastValue}>
            {children}
        </Provider>
    );
}

export default ForecastContextProvider;
