import React from 'react'
import html  from '../assets/html-img.png';
import css  from '../assets/css-img.svg';
import js  from '../assets/js-img.png';
import react  from '../assets/react-img.png';
import tailwind  from '../assets/tailwind-img.png';
import boostrap  from '../assets/boostrap-img.png';

function Skills() {
      

  return (
      <div className='py-[450px]' id="section-2">
          <div className='mt-[-440px] text-center'>
            <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-6'>Skills</h1>
            <div className='grid md:grid-cols-3 md:grid-rows-2 mt-20 gap-20 grid-cols-1 grid-rows-6'>
              <div className='flex flex-col justify-center items-center'>
                <h2 className='text-3xl font-bold md:py-6'>HTML5</h2>
                <img className="h-[150px] w-[150px]" src={html}></img>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <h2 className='text-3xl font-bold md:py-6'>CSS3</h2>
                <img className='h-[150px] w-[150px]' src={css}></img>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <h2 className='text-3xl font-bold md:py-6'>Javascript</h2>
                <img className='h-[150px] ' src={js}></img>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <h2 className='text-3xl font-bold md:py-6'>React JS</h2>
                <img className='h-[150px]' src={react}></img>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <h2 className='text-3xl font-bold md:py-6'>Tailwind</h2>
                <img className='h-[150px]' src={tailwind}></img>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <h2 className='text-3xl font-bold md:py-6'>Boostrap</h2>
                <img className='h-[150px]' src={boostrap}></img>
              </div>
            </div>
          </div>
      </div>
  )
}

export default Skills;