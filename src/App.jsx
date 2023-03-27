import React from 'react'
import Layer from './Layer'
import ContextProvider from './Context/ContextProvider'




const App = () => {
  
  return (
    <>
    <ContextProvider>
       <Layer />
    </ContextProvider>
    </>
  )
}

export default App
