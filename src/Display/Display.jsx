import React from 'react';

const todayDate = new Date()
const hora = todayDate.getHours()
const minutos = todayDate.getMinutes()

const minutosFormateados = ('0' + minutos).slice(-2)

/*  ==========  ==========  REVEER CUANDO LLEGUE A 0, VERIFICAR SI HAY 2 CIFRAS O 1  ==========  ==========  */


const diaNumSemana = todayDate.getDay()
const diaNumMes = todayDate.getDate()
const mes = todayDate.getMonth() + 1
const anio = todayDate.getFullYear()

const meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const semanaDias = ['Sunday', 'Mondat', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const mesActual = (meses[mes])
const diaActual = (semanaDias[diaNumSemana])



const Display = () => {


    return (
        <>
        <h2 className='text1'>{hora}:{minutosFormateados}</h2>
        <p className='text4'>{diaActual} {diaNumMes}, {mesActual}, {anio}</p>
        <p>Hi, Santi. Good evening !</p>
        </>
    );
}

export default Display;
