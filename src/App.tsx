// import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { TamaguiProvider } from 'tamagui'
import { PrimeReactProvider } from 'primereact/api';
import Login from './pages/login/Login'
import tamaguiConfig from './tamagui.config'
import Dashboard from './pages/dashboard/Dashboard';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />
    },{
      path: '/login',
      element: <Login />
    }
  ])


  return (
    <>
      <TamaguiProvider config={tamaguiConfig}>
        <PrimeReactProvider>
        <RouterProvider router={router} />
        </PrimeReactProvider>
      </TamaguiProvider>
    </>
  )
}

export default App
