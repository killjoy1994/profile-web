import React from 'react'
import TextMoving from './TextMoving'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <div className='h-screen flex justify-center items-center flex-col'>
        <h1 className='text-slate-50 text-7xl font-semibold'>Hello, My name is <span className='animate-bounce inline-block text-blue-500'>Bagus</span></h1>
        {/* <p className='text-slate-50 text-2xl mt-2'>I'm a frontend developer</p> */}
        <TextMoving />
        <button className='text-slate-50 border-solid border-[3px] hover:brightness-95 bg-blue-500 border-blue-500 mt-3 px-3 py-1 text-2xl rounded-sm'>Contact Me</button>
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home