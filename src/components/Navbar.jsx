import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-full top-0'>
      <div className='max-w-[1300px] px-4 flex justify-between mx-auto pt-3'>
        <h1 className='text-slate-300 text-3xl'>Bagus<span className='text-blue-500'>.</span></h1>
        <ul className='flex gap-x-5'>
          <li className='text-slate-300 text-2xl'><a className='hover:text-blue-500 block transition hover:-skew-y-3' href="">About</a></li>
          <li className='text-slate-300 text-2xl'><a className='hover:text-blue-500 block transition hover:-skew-y-3' href="">Project</a></li>
          <li className='text-slate-300 text-2xl'><a className='hover:text-blue-500 block transition hover:-skew-y-3' href="">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar