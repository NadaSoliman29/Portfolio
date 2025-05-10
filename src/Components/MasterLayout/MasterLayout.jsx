import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'

export default function MasterLayout() {
  return (
   <>
  

   <div className='container-fluid'>
    <div className='row'>
        <div className='col-md-2'> 
        <NavBar/>
        

        </div>
        <div className='col-md-10 px-0'> 
        <Outlet/>
     
      </div>
      </div>

   </div> 
  
   </>
  )
}
