import React, { useEffect, useContext, createContext, useState } from 'react';


const contexto = createContext()
const { Provider } = contexto




export const useWeather = () => {
    return useContext(contexto)
}

const ContextProvider = ({children}) => {



    
    const [ dataWeather, setDataWeather ] = useState({})
    const [ dataForecast, setDataForecast ] = useState([])
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

        


            const API_KEY = '42d2e6ec51d5cd72d3b597849a9ab5ac' 
            const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=sp&lat=${coords.lat}&lon=${coords.long}&exclude=hourly,daily&appid=${API_KEY}`


            const fetchDataDaily = async () => {
                if(coords.location) {
                const resp = await fetch(URL)
                const data = await resp.json()
                console.log(data)
                    setDataWeather({
                        temp : data.main.temp.toFixed(1),
                        maxTemp : data.main.temp_max.toFixed(1),
                        minTemp : data.main.temp_min.toFixed(1),
                        windSpeed : (data.wind.speed * 3.6).toFixed(1),
                        windDir : data.wind.deg,
                        humidity : data.main.humidity,
                        pressure : data.main.pressure,
                        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString("default"),
                        sunset: new Date (data.sys.sunset *1000).toLocaleTimeString("default"),
                        iconCode: data.weather[0].id,
                        message: data.weather[0].main,
                    })
                }
            }
            
            fetchDataDaily()
        


            if( dataWeather.windDir >= 338 && dataWeather.windDir <= 22 ){
                setCompass('North')
            }else if (dataWeather.windDir >= 23 && dataWeather.windDir <= 67 ){
                setCompass('NorthEast')
            }else if (dataWeather.windDir >= 68 && dataWeather.windDir <= 112 ){
                setCompass('East')
            }else if (dataWeather.windDir >= 113 && dataWeather.windDir <= 157 ){
                setCompass('SouthEast')
            }else if (dataWeather.windDir >= 158 && dataWeather.windDir <= 202 ){
                setCompass('South')
            }else if (dataWeather.windDir >= 203 && dataWeather.windDir <= 247 ){
                setCompass('SouthWest')
            }else if (dataWeather.windDir >= 248 && dataWeather.windDir <= 292 ){
                setCompass('West')
            }else if (dataWeather.windDir >= 293 && dataWeather.windDir <= 337 ){
                setCompass('NorthWest')
            } else {
                console.log("ok, tranqui, pero hubo un temita")
            }
        


            if(dataWeather.iconCode <= 299){
                setIcon('/img/icons/thunderstorm.png')
            } else if (dataWeather.iconCode >= 300 && dataWeather.iconCode <= 321){
                setIcon('/img/icons/lightrain.png')
            } else if (dataWeather.iconCode >= 500 && dataWeather.iconCode <= 531){
                setIcon('/img/icons/rain.png')
            } else if (dataWeather.iconCode >= 600 && dataWeather.iconCode <= 631){
                setIcon('/img/icons/rain.png')
            } else if (dataWeather.iconCode === 800){
                setIcon('/img/icons/sun.png')
            } else if (dataWeather.iconCode === 801){
                setIcon('/img/icons/cloud.png')
            } else if (dataWeather.iconCode === 802){
                setIcon('/img/icons/cloudy.png')
            } else if (dataWeather.iconCode === 803){
                setIcon('/img/icons/cloudy.png')
            } else {
                 console.log('There is no code yet')
            }    



            const URL_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lang=sp&lat=${coords.lat}&lon=${coords.long}&appid=${API_KEY}`

            const fetchDataForecast = async () => {
                if(coords.location) {
                const resp = await fetch(URL_FORECAST)
                const forecast_data = await resp.json()
                setDataForecast([forecast_data.list])
                }
            }

            fetchDataForecast()
    
    }, [coords.location, dataWeather.iconCode, dataWeather.windDir]);


    //Se define el valor del contexto y se lo pasa como value en el Provider
    const dataValue = {
        data: dataWeather,
        icon: icon,
        compass: compass,
        dataForecast: dataForecast,
    }
    
    




    return (
        <Provider value={dataValue}>
            {children}
        </Provider>
    );
}

export default ContextProvider;