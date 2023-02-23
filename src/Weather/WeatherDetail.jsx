import React from 'react';
import { useWeather } from '../Context/ContextProvider';

const WeatherDetail = () => {

    
    const { data, compass } =  useWeather()
    console.log(compass)

    return (
        <div className='detail-container width100 gap-col-2 wrap m-neg2-left'>
            <div className='detail-box'>
                <p>Max</p><span>|</span><p>{data.maxTemp}°</p>
                <p>Min</p><span>|</span><p>{data.minTemp}°</p>
            </div>
            <div className='detail-box'>
                <p>Wind</p><span>|</span><p>{data.windSpeed}km/h</p>
                <p>Wind Dir.</p><span>|</span><p>{compass}°</p>
            </div>
            <div className='detail-box'>
                <p>Humidity</p><span>|</span><p>{data.humidity}%</p>
                <p>Pressure</p><span>|</span><p>{data.pressure}hPa</p>
            </div>
            <div className='detail-box'>
                <p>Sunrise</p><span>|</span><p>{data.sunrise}pm</p>
                <p>Sunset</p><span>|</span><p>{data.sunset}am</p>
            </div>
        </div>
    );
}

export default WeatherDetail;
