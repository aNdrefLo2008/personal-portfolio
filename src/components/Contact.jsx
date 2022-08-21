import React from 'react'

function Contact() {
  return (
    <div className='bg-white text-black py-[100px]' id="section-4">
        <div className='flex justify-center flex-col items-center'>
            <h1 className='md:text-5xl sm:text-3xl text-xl font-bold md:py-6 border-b-4 border-gray-500 mb-2'>Contact</h1>
            <p className='md:text-xl text-base font-bold text-center'>// Submit the form below or text me an email - @floreaalexandru146@gmail.com</p>
            <form className='flex flex-col justify-center'>
                <input className='bg-white border-2 border-gray-600 rounded m-4 p-2 md:w-[600px] sm:w-[500px] w-[300px]' placeholder='Name' type="text"></input>
                <input className='m-4 bg-white border-2 border-gray-600 rounded p-2 md:w-[600px] sm:w-[500px] w-[300px]' placeholder='Email' name="email"></input>
                <textarea className='sm:m-4 bg-white border-2 border-gray-600 rounded p-2 md:w-[600px] sm:w-[500px] w-[300px] ml-4' rows="10" placeholder='Message'></textarea>
                <button className="bg-cyan-300 hover:bg-cyan-500 rounded-md font-medium w-[200px] my-6 mx-auto py-4">Get In Touch</button>
            </form>
        </div>
    </div>
  )
}

export default Contact