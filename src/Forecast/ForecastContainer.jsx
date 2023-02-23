import React from 'react'
import Forecast from './Forecast'

const ForecastContainer = () => {
    return (
        <div className='flex between wrap width80 gap-col-1 mb2'>
            <Forecast />
        </div>
    );
}

export default ForecastContainer;
