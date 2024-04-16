import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import AboutUs from './Components/AboutUs'


function App() {
 

  return (
    <>
   <Navbar/>
   <Home/>
   <Skills/>

   <Projects/>
   <Experience/>
   <AboutUs/> 
   <Contact/>

    </>
  )
}

export default App
