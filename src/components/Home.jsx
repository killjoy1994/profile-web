import React from 'react'
import TextMoving from './TextMoving'
import Pdf from "../assets/resume.pdf"

const Home = () => {
  const handleResume = () => {
    window.open(Pdf)
  }
  return (
    <div id="home">
      {/* HERO SECTION */}
      <div className='min-h-[600px] flex mt-[250px] items-center flex-col'>
        <h1 className='text-slate-50 text-5xl px-5 md:text-7xl font-semibold'>Hello, My name is <span className=' inline-block text-blue-500'>Bagus</span></h1>
        {/* <p className='text-slate-50 text-2xl mt-2'>I'm a frontend developer</p> */}
        <TextMoving />
        <button className='text-slate-50 border-solid border-[3px] hover:brightness-95 bg-blue-500 border-blue-500 mt-3 px-3 py-1 text-2xl rounded-sm' onClick={handleResume}>My Resume</button>
      </div>
    </div>
  )
}

export default Home