import React from 'react';
import { useWeather } from '../Context/ContextProvider';



const Weather = () => {
    
    const { data, icon } =  useWeather()
    const iconURL = icon
    
    
    return (
        <div className='weather-container'>
            <p className='text1'>{data.feels}°<span className='text2'>C feels</span></p>
            <div className="weather-detail">
                <h2>Buenos Aires</h2>
                <div className='flex vertical center m1 evenly'>
                <img src={`${iconURL}`} alt="Sunny Day" className='img-icon'/>
                <p className='text5'>{data.message}</p>
                </div>
            </div>
        </div>
        
    );
}

export default Weather;
