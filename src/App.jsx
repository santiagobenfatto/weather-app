import React from 'react'
import Layer from './Layer'
import ContextProvider from './Context/ContextProvider'
import ForecastContextProvider from './Context/ForecastContextProvider'



function App() {
  

  return (
    <>
    <ContextProvider>
    <ForecastContextProvider>
      <Layer />
    </ForecastContextProvider>
    </ContextProvider>
    </>
  )
}

export default App
