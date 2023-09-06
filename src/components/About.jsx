import React from 'react'

const About = () => {
    return (
        <div id='about' className='min-h-[800px] mx-auto max-w-[1300px] px-4'>
            <h2 className='text-slate-50 text-6xl mb-16'>ABOUT ME</h2>
            <div className='flex justify-between gap-x-20'>
                <p className='text-slate-50 text-xl w-6/12'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet consequatur, suscipit beatae quam quos temporibus ut laboriosam, reprehenderit, soluta repudiandae officia alias velit! Maxime, doloribus sequi. Dolorum officia est illum tempore suscipit in accusamus tenetur laboriosam eaque. Quidem vero velit, esse placeat laudantium necessitatibus, ea exercitationem impedit porro atque nulla quisquam sit blanditiis pariatur! Aliquid, adipisci. Nisi perspiciatis commodi aliquid. Repellat, in consequatur! Dicta quibusdam quis ab quidem, recusandae tempore ea aut possimus dolorem nobis consequuntur maiores omnis molestiae architecto repellendus nulla deserunt necessitatibus voluptas quam exercitationem, commodi alias repellat officia earum! Tempore, harum pariatur? Delectus natus molestias officia adipisci?
                </p>
                <div className='w-6/12'>
                    <div className='mb-10'>
                        <h3 className='text-slate-50 text-2xl mb-5'>My Skills:</h3>
                        <ul className='flex gap-3 w-[400px] flex-wrap'>
                            <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>HTML</li>
                            <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Javascript</li>
                            <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>CSS</li>
                            <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>React</li>
                            <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Node</li>
                            <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Express</li>
                            <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Git</li>
                            <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Tailwind</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-slate-50 text-2xl mb-5'>Currently Learning:</h3>
                        <ul className='flex gap-3 w-[400px] flex-wrap'>
                            <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Backend Development</li>
                            <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Mysql</li>
                            <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Mongodb</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About