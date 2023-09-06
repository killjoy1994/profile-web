import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
      <div className='max-w-[1300px] px-4 flex justify-between mx-auto py-3 bg-opacity-60 bg-[#000]'>
        <h1 className='text-slate-300 text-3xl'>Bagus Nugroho</h1>
        <ul className='flex gap-x-5'>
          <li className='text-slate-300 text-2xl'><a className='hover:text-blue-500 block transition hover:-skew-y-3' href="#about">About</a></li>
          <li className='text-slate-300 text-2xl'><a className='hover:text-blue-500 block transition hover:-skew-y-3' href="#projects">Project</a></li>
          <li className='text-slate-300 text-2xl'><a className='hover:text-blue-500 block transition hover:-skew-y-3' href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar