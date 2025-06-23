// import { useState } from 'react'
import { TamaguiProvider } from 'tamagui'
import { PrimeReactProvider } from 'primereact/api';
import './App.css'
import Login from './pages/login/Login'
import tamaguiConfig from './tamagui.config'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <TamaguiProvider config={tamaguiConfig}>
        <PrimeReactProvider>
        <Login />
        </PrimeReactProvider>
      </TamaguiProvider>
    </>
  )
}

export default App
