import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='min-h-screen mx-auto max-w-[1300px] px-4 mt-48'>
            <h2 className='text-slate-50 text-6xl mb-16'>CONTACT</h2>
            <div className='mx-auto bg-slate-900 w-[1000px] pt-10 pb-16 rounded-md flex items-center flex-col'>
                <p className='text-slate-50 text-4xl'>Let's get in touch!</p>
                <form action="" className='mt-10 flex flex-col gap-y-4 justify-center items-center w-[500px]'>
                    <label className='w-full text-slate-50 text-lg' htmlFor="">
                        Firstname
                        <input className='w-full mt-2 px-2 py-1 text-slate-700' type="text"  placeholder='Enter your firstname...'/>
                    </label>
                    <label className='w-full text-slate-50 text-lg' htmlFor="">
                        Lastname
                        <input className='w-full mt-2 px-2 py-1 text-slate-700' type="text"  placeholder='Enter your lasttname...'/>
                    </label>
                    <label className='w-full text-slate-50 text-lg' htmlFor="">
                        Email
                        <input className='w-full mt-2 px-2 py-1 text-slate-700' type="email" placeholder='Enter your email...' />
                    </label>
                    <label className='w-full text-slate-50 text-lg' htmlFor="">
                        Message
                        <textarea className='w-full mt-2 px-2 py-1 text-slate-700' placeholder='Enter your message...' />
                    </label>
                    <button className='py-1 px-2 text-slate-50 text-lg rounded-md hover:brightness-90 tracking-[2px] bg-blue-500 w-full'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact