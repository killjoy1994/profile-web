import React from 'react'
import Masak from "../assets/masak.png"
import Kanban from "../assets/kanban.png"
import { BsGithub } from "react-icons/bs"

const Projects = () => {
    return (
        <div id='projects' className='min-h-screen mx-auto max-w-[1300px] px-4'>
            <h2 className='text-slate-50 text-6xl mb-16'>My Projects</h2>
            <div className='grid md:grid-cols-3 gap-x-5 gap-y-20'>
                <div className=''>
                    <div className='hover:brightness-90 cursor-pointer'>
                        <img className='w-full h-auto object-cover' src={Masak} alt="Masak" />
                    </div>
                    <div className='flex justify-between items-center mt-4 '>
                        <h3 className='text-slate-50 text-2xl'>Masak</h3>
                        <div className='flex gap-x-3 items-center justify-center'>
                            <a href='https://food-recipe-ui.vercel.app' target='blank' className='text-slate-50 text-lg hover:-skew-y-3'>Demo</a>
                            <a href="https://github.com/killjoy1994/food_recipe" target='blank' className='hover:scale-110'>
                                <BsGithub color='white' size={20} />
                            </a>
                        </div>
                    </div>
                    <ul className='flex gap-3 w-[400px] flex-wrap mt-2 '>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>React</li>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Node Js</li>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Express</li>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Tailwind CSS</li>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Mongodb/Mongoose</li>
                        {/* <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Express</li>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Git</li>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Tailwind</li> */}
                    </ul>
                    <p className='text-slate-50 text-lg mt-2'>Masak is a website where you can search various categories of recipe. You can create an account and create your own delicious recipe so you can share to all people!. </p>
                    <p className='text-[14px] text-slate-50'>*Still working for improvement of this project</p>
                </div>
                <div className=''>
                    <div className='hover:brightness-90 cursor-pointer'>
                        <img className='w-full h-auto object-cover' src={Kanban} alt="Kanban" />
                    </div>
                    <div className='flex justify-between items-center mt-4 '>
                        <h3 className='text-slate-50 text-2xl'>Kanban Task Management</h3>
                        <div className='flex gap-x-3 items-center justify-center'>
                            <a href='https://kanban-app-bagusn20.netlify.app' target='blank' className='text-slate-50 text-lg hover:-skew-y-3'>Demo</a>
                            <a href="https://github.com/killjoy1994/kanban-app" target='blank' className='hover:scale-110'>
                                <BsGithub color='white' size={20} />
                            </a>
                        </div>
                    </div>
                    <ul className='flex gap-3 w-[400px] flex-wrap mt-2'>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>HTML</li>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>React</li>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Local storage</li>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Tailwind CSS</li>
                        {/* <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Express</li>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Git</li>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Tailwind</li> */}
                    </ul>
                    <p className='text-slate-50 text-lg mt-2'>With Kanban task management you can manage and organize your work process. In this project I use local storage so user can store their data and it also have drag and drop functionality. User can also pick theme between dark and light mode.</p>
                    {/* <a href="https://kanban-app-bagusn20.netlify.app/"></a> */}
                </div>
                <div className=''>
                    <div className='hover:brightness-90 cursor-pointer'>
                        <img className='w-full h-auto object-cover' src={Masak} alt="Masak" />
                    </div>
                    <h3 className='text-slate-50 text-2xl mt-4'>Masak</h3>
                    <p className='text-slate-50 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem magnam earum, commodi error amet cupiditate neque atque. Repellat, impedit et?</p>
                </div>
                <div className=''>
                    <div className='hover:brightness-90 cursor-pointer'>
                        <img className='w-full h-auto object-cover' src={Masak} alt="Masak" />
                    </div>
                    <div className='flex justify-between items-center mt-4 '>
                        <h3 className='text-slate-50 text-2xl'>Lektur</h3>
                        <div className='flex gap-x-3 items-center justify-center'>
                            <a href='https://food-recipe-ui.vercel.app' target='blank' className='text-slate-50 text-lg hover:-skew-y-3'>Demo</a>
                            <a href="https://github.com/killjoy1994/food_recipe" target='blank' className='hover:scale-110'>
                                <BsGithub color='white' size={20} />
                            </a>
                        </div>
                    </div>
                    <ul className='flex gap-3 w-[400px] flex-wrap mt-2 '>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>HTML</li>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>CSS</li>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>React</li>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Node Js</li>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Express</li>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Postgre</li>
                        {/* <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Express</li>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Git</li>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Tailwind</li> */}
                    </ul>
                    <p className='text-slate-50 text-lg mt-2'>Masak is a website where you can search various categories of recipe. You can create an account and create your own delicious recipe so you can share to all people!. </p>
                    <p className='text-[14px] text-slate-50'>*Still working for improvement of this project</p>
                </div>
            </div>
        </div>
    )
}

export default Projects