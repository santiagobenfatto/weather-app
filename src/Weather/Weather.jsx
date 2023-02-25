import React from 'react';
import { useWeather } from '../Context/ContextProvider';



const Weather = () => {
    
    const { data, icon } =  useWeather()
    const iconURL = icon
    
    
    return (
           <div className='weather-container'>
                <h2><span className='text1'>{data.temp}°</span> Buenos Aires</h2>
                <div className='flex vertical center m1 evenly'>
                <img src={`${iconURL}`} alt="Sunny Day" className='img-icon'/>
                <p className='text4'>{data.message}</p>
                </div>
           </div>
    );
}

export default Weather;
