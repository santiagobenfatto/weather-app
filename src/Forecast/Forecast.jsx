import React, { useState } from 'react';
import { useForecaster } from '../Context/ForecastContextProvider';



const Forecast = () => {
    
    
    const { dataForecast } = useForecaster()

    const diaPorTemp = (data) => {
        return data.reduce((acc, dia)=>{
            const date = new Date(dia.dt_txt).getDate()

            if(!acc[date]) {
                acc[date] = []
            }
            acc[date].push(dia)
            return acc
        }, {})
    }
    
    const temperaturaPorDia = diaPorTemp(dataForecast)
    console.log(temperaturaPorDia)
    //Output -> 8,9,10,11,12

    let arrDias = []
    const actualDate = new Date().getDate()
    console.log(temperaturaPorDia[actualDate])
    arrDias.push(temperaturaPorDia[actualDate + 1])
    arrDias.push(temperaturaPorDia[actualDate + 2])
    arrDias.push(temperaturaPorDia[actualDate + 3])
    arrDias.push(temperaturaPorDia[actualDate + 4])
    console.log(arrDias)
    

    



    // for (const prop in temperaturaPorDia){
    // const dias = temperaturaPorDia[prop]

    // console.log(dias)
        
    //}



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
