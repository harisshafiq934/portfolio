import React from 'react'
import Haris from "../assets/haris.jpg"
function Home() {

    
  return (
    <div className='container mx-auto'> 
    <div className='grid lg:grid-cols-2 grid-cols-1 lg:mt-32 mt-20 px-10 mx-auto items-center'>
<div className='mx-auto lg-py-0 py-6'>
<h2 className='font-bold text-4xl  text-[#D9D9D9] '>
    Hi 👋, 
    <br />
    My name is
    <br /> 
    <span className='haris'>Haris Shafiq</span>
    <br />
    I build things for web

</h2>
</div>

<div className='mx-auto'>
<div className='border-4 border-[rgba(19, 176, 245, 1)] border-opacity-100  rounded-full h-72 w-72 relative z-20 overflow-hidden'>
    <img src={Haris} alt="" className='absolute inset-0 w-full h-[160%] object-cover ' />
</div>

</div>

    </div>
    
    </div>
  )
}

export default Home