import React from 'react'
import Typed from 'react-typed';

function Hereo() {
  return (
      <div className='bg-white min-w-fit text-black' id="section-1">
        <div className='flex flex-col justify-center text-center mt-[-96px] w-full h-screen mx-auto'>
            <p className='md:text-2xl sm:text-xl font-bold p-2 text-zinc-600'>Hello, my name is</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Andrei Florea</h1>
            <p className='md:text-5xl sm:text-4xl text-2xl font-bold md:py-6'>I am a self taught</p>
            <Typed
                    className="md:text-5xl sm:text-4xl text-2xl font-bold md:pl-4 pl-2"
                    strings={['Web Developer', 'Web Designer', 'UX UI Designer']}
                    typeSpeed={150} backSpeed={150} loop
                    />
            <button className="bg-cyan-300 hover:bg-cyan-500 rounded-md font-medium w-[200px] my-6 mx-auto py-4">Get In Touch</button>
        </div>
    </div>
    
  )
}

export default Hereo