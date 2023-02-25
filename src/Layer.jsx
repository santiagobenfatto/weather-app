import React from 'react';
import DisplayContainer from './Display/DisplayContainer';
import ForecastContainer from './Forecast/ForecastContainer';
import User from './User/User';
import WeatherContainer from './Weather/WeatherContainer';

const Layer = () => {
    return (
        <div className='bgContainer'>
            <DisplayContainer />
            <WeatherContainer />
            <ForecastContainer />
        </div>
    );
}

export default Layer;
