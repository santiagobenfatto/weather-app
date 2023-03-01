import React from 'react';
import ClockDisplayContainer from './ClockDisplay/ClockDisplayContainer';
import ForecastContainer from './Forecast/ForecastContainer';
import WeatherContainer from './Weather/WeatherContainer';

const Layer = () => {
    return (
        <div className='bgContainer'>
            <ClockDisplayContainer />
            <WeatherContainer />
            <ForecastContainer />
        </div>
    );
}

export default Layer;
