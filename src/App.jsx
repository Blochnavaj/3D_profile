 import React from 'react'
 import { BrowserRouter, Route , Router, Routes } from 'react-router-dom'

 function App() {
   return (
     <>
         <main className='bg-slate-300/50'>
             <BrowserRouter>
               navbar
               <Routes>
                <Route path='/' element={'home'}/>
                <Route path='/about' element={'about'}/>
                <Route path='/projects' element={'projects'}/>
                <Route path='/contact' element={'contact'}/>
             

               </Routes>
             
             
             </BrowserRouter>

         </main>
     </>
   )
 }
 
 export default App