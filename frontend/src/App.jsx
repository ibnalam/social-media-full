import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registration from './pages/registration'


import { createBrowserRouter,
  createRoutesFromElements,
  Route,
   RouterProvider
 } from 'react-router-dom'

 const router = createBrowserRouter(
  createRoutesFromElements(   
    <Route>
      <Route path='/' element={<Registration/>}></Route>
    </Route>
  )
)





function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App