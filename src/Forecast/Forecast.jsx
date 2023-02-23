import React, { useState } from 'react';
import { useWeather } from '../Context/ContextProvider';




const Forecast = () => {
    
    
    
    const { dataForecast } = useWeather()
    
    console.log(dataForecast)

   
    return (
        <>
            <div className='flex vertical center around box100px'>
                <p>Tuesday</p>
                <img src="/img/icons/rain.png" className='img-icon' alt="" />
                <div className='flex evenly width60'>
                    <span>32°</span>
                    <span className='whiteLight'>20°</span>
                </div>
            </div>
            <div className='flex vertical center around box100px'>
                <p>Wednesday</p>
                <img src="/img/icons/cloudy.png" className='img-icon' alt="" />
                <div className='flex evenly width60'>
                    <span>32°</span>
                    <span className='whiteLight'>20°</span>
                </div>
            </div>
            <div className='flex vertical center around box100px'>
                <p>Thursday</p>
                <img src="/img/icons/windy.png" className='img-icon' alt="" />
                <div className='flex evenly width60'>
                    <span>32°</span>
                    <span className='whiteLight'>20°</span>
                </div>
            </div>
            <div className='flex vertical center around box100px'>
                <p>Friday</p>
                <img src="/img/icons/meteor.png" className='img-icon' alt="" />
                <div className='flex evenly width60'>
                    <span>32°</span>
                    <span className='whiteLight'>20°</span>
                </div>
            </div>
            <div className='flex vertical center around box100px'>
                <p>Saturday</p>
                <img src="/img/icons/rainbow.png" className='img-icon' alt="" />
                <div className='flex evenly width60'>
                    <span>32°</span>
                    <span className='whiteLight'>20°</span>
                </div>
            </div>
        </>
    );
}

export default Forecast;
