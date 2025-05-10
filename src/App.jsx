import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/NavBar'
import MasterLayout from './Components/MasterLayout/MasterLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Work from './Components/Work/Work'
import Skills from './Components/Skills/Skills'
function App() {
  const routes = createBrowserRouter([
    {
      path: '/' ,
      element:<MasterLayout/> ,
      children :[
       {index: true , element:<Home/>},
       {path:"home" , element:<Home/>},
       {path:"about" , element:<About/>},
       {path:"skills" , element:<Skills/>},
       {path:"experience" , element:<Experience/>},
       {path:"work" , element:<Work/>}
       

      ]
    }
    
  ])

  return (
    <>
<RouterProvider router={routes}></RouterProvider>

    </>
  )
}

export default App
