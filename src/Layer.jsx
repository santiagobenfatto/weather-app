import React from 'react';
import ClockDisplayContainer from './ClockDisplay/ClockDisplayContainer';
import WeatherContainer from './Weather/WeatherContainer';
import Loading from './Loading/Loading/'
import { useWeather } from './Context/ContextProvider';

const Layer = () => {
    const {data} = useWeather()

    return (
        
        <div className='bgContainer'>
        { data.feels ? 
        <>
        <ClockDisplayContainer />
        <WeatherContainer />
        </>
        :    <Loading />
        }
        </div>
        
    );
}

export default Layer;
