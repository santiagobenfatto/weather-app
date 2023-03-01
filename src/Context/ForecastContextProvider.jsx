import React, { useState, useEffect, useContext, createContext } from 'react';


const ForecastContextProvider = () => {
    
    const [ dataForecast, setDataForecast ] = useState([])
    
    useEffect(() => {
       
        //const URL_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lang=sp&lat=${coords.lat}&lon=${coords.long}&appid=${API_KEY}`

        const fetchDataForecast = async () => {
            if(coords.location) {
            const resp = await fetch(URL_FORECAST)
            const forecast_data = await resp.json()
            setDataForecast([forecast_data.list])
            }
        }

        fetchDataForecast()

    }, [input]);
    
    
    
    
    
    return (
        <div>
            
        </div>
    );
}

export default ForecastContextProvider;
