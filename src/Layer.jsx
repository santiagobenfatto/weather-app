import React from 'react';
import DisplayContainer from './Display/DisplayContainer';
import ForecastContainer from './Forecast/ForecastContainer';
import User from './User/User';
import WeatherContainer from './Weather/WeatherContainer';

const Layer = () => {
    return (
        <div className='bgContainer'>
        <div className="col-izq">
            <DisplayContainer />
            <WeatherContainer />
            <ForecastContainer />
        </div>
        <div className="col-der">
            <User />
        </div>
        </div>
    );
}

export default Layer;
