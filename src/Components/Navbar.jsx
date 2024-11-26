import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className='header'>
        <NavLink to='/' className='w-10 h-10 rounded-lg bg-white justify-center items-center flex shadow-lg font-bold'>
           <p className='blue-gradient_text'>NB</p> 
        </NavLink>
          <nav className='flex gap-7 text-lg font-medium'>
         <NavLink to='about' className={({isActive} ) => isActive ? 'text-blue-500' : 'text-black'}>
           <p>About</p>
         </NavLink>

         <NavLink to='Projects' className={({isActive} ) => isActive ? 'text-blue-500' : 'text-black'}>
           <p>Projects</p>
         </NavLink>
          </nav>

 
    </header>
  )
}

export default Navbar