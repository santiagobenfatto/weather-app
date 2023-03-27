import React, { useState ,useEffect } from 'react';



const ClockDisplay = () => {
    
    const [ clockState, setClockState ] = useState({})
    const [ date, setDate ] = useState({})
    const [ dayAndMonth, setDayAndMonth ] = useState({})
    const [ message, setMessage ] = useState('')


    useEffect(() => {
    
        const todayDate = new Date()
        
        setDate({
            diaNumSemana : todayDate.getDay(),
            diaNumMes: todayDate.getDate(),
            mes : todayDate.getMonth() + 1,
            anio : todayDate.getFullYear(),
        })

        
        const meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const semanaDias = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        
        setDayAndMonth({
            mesActual: (meses[date.mes]),
            diaActual: (semanaDias[date.diaNumSemana]),
        })


        if(clockState.hora >= 6 && clockState.hora <=12){
            setMessage('morning')
        } else if(clockState.hora >= 13 && clockState.hora <= 19){
            setMessage('evening')
        } else {
            setMessage('night')
        }

        setClockState({
           hora: todayDate.getHours(),
           minutos: ('0' + todayDate.getMinutes()).slice(-2),
        })
        
    }, [date, dayAndMonth, message, clockState.minutos]);
    
  
    
    return (
        <>
        <h2 className='text1'>{clockState.hora}:{clockState.minutos}</h2>
        <p className='text5'>{dayAndMonth.diaActual} {date.diaNumMes}, {dayAndMonth.mesActual}, {date.anio}</p>
        <p className='text4'>Hi stranger. Good {`${message}`} !</p>
        </>
    );
}

export default ClockDisplay;
