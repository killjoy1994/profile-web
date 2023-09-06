import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <div className='fixed w-full top-0'>
      <div className='max-w-[1300px] px-4 flex justify-between mx-auto py-4 bg-opacity-60 bg-[#000]'>
        <Link to='home' smooth={true} duration={500} offset={-300}><h1 className='text-slate-300 text-3xl cursor-pointer'>Bagus Nugroho</h1></Link>
        <ul className='flex gap-x-5'>
          <Link to='about' smooth={true} duration={500} offset={-100}><li className='text-slate-300 text-2xl hover:text-blue-500 block transition hover:-skew-y-3 cursor-pointer'>About</li></Link>
          <Link to='projects' smooth={true} duration={500} offset={-100}><li className='text-slate-300 text-2xl hover:text-blue-500 block transition hover:-skew-y-3 cursor-pointer'>Projects</li></Link>
          <Link to='contact' smooth={true} duration={500} offset={-100}><li className='text-slate-300 text-2xl hover:text-blue-500 block transition hover:-skew-y-3 cursor-pointer'>Contact</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar