import React from 'react'
import Masak from "../assets/masak.png"
import Kanban from "../assets/kanban.png"
import Lektur from "../assets/lektur.png"
import Todo from "../assets/todo.png"
import MyMarket from "../assets/mymarket.png"
import { BsGithub } from "react-icons/bs"

const Projects = () => {
    return (
        <div id='projects' className='min-h-[800px] mx-auto max-w-[1300px] px-4'>
            <h2 className='text-slate-50 text-6xl mb-16'>My Projects</h2>
            <div className='grid md:grid-cols-3 gap-x-5 gap-y-20'>
                <div className=''>
                    <div className='h-[250px]'>
                        <img className='w-full h-full object-center object-cover' src={MyMarket} alt="MyMarket" />
                    </div>
                    <div className='flex justify-between items-center mt-4 '>
                        <h3 className='text-slate-50 text-2xl'>MyMarket (Ecommerce)</h3>
                        <div className='flex gap-x-3 items-center justify-center'>
                            <a href='' target='blank' className='text-slate-50 text-lg hover:-skew-y-3'>Demo (not deployed yet)</a>
                            <a href="https://github.com/killjoy1994/ecommerce_portofolio" target='blank' className='hover:scale-110'>
                                <BsGithub color='white' size={20} />
                            </a>
                        </div>
                    </div>
                    <ul className='flex gap-3 w-[400px] flex-wrap mt-2 '>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>PHP</li>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Laravel</li>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>MySql</li>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Jquery</li>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Bootstrap 5</li>
                        {/* <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Express</li>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Git</li>
                        <li className='text-slate-50 px-3 py-1 bg-slate-800 rounded-md'>Tailwind</li> */}
                    </ul>
                    <p className='text-slate-50 text-lg mt-2'>In this project, I implemented my knowledge of PHP and Laravel that I have learned. I created pages for both admin and users. There are features such as a cart and checkout. Admins can also generate order data into a PDF file. This project still has plenty of room for further development..</p>
                    <p className='text-[14px] text-slate-50'>*still working on improving this project.</p>
                </div>
                <div className=''>
                    <div className='h-[250px]'>
                        <img className='w-full h-full object-center object-cover' src={Masak} alt="Masak" />
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
                    <p className='text-slate-50 text-lg mt-2'>Masak is a website where you can search various categories of recipes. You can create an account and share your own delicious recipes with everyone. Through this project, I learned about authentication and authorization with JWT. Additionally, I created the API for the project using Express.</p>
                    <p className='text-[14px] text-slate-50'>*still working on improving this project.</p>
                </div>
                <div className=''>
                    <div className='h-[250px]'>
                        <img className='w-full h-full object-center object-cover' src={Kanban} alt="Kanban" />
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
                    <div className='h-[250px]'>
                        <img className='w-full h-full object-center object-cover' src={Todo} alt="Masak" />
                    </div>
                    <div className='flex justify-between items-center mt-4 '>
                        <h3 className='text-slate-50 text-2xl'>Todo App</h3>
                        <div className='flex gap-x-3 items-center justify-center'>
                            <a href='https://todo-app-bagusn.vercel.app/' target='blank' className='text-slate-50 text-lg hover:-skew-y-3'>Demo</a>
                            <a href="https://github.com/killjoy1994/todo-app-main" target='blank' className='hover:scale-110'>
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
                    <p className='text-slate-50 text-lg'>This project is a challenge from Frontend Mentor, and I learned the drag and drop feature and also dark mode with tailwind from it. With the Todo App, users can organize and manage tasks and activities efficiently. Users can create tasks and check them off when completed.</p>
                </div>
                <div className=''>
                    <div className='h-[250px]'>
                        <img className='w-full h-full object-center object-cover' src={Lektur} alt="Masak" />
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
                    <p className='text-slate-50 text-lg mt-2'>This is a project for the final assignment while I am participating in the Glints Academy bootcamp. Lektur is an online platform where students can explore knowledge from available courses.</p>
                    <p className='text-[14px] text-slate-50'>*This project is facing issues due to problems with deployment from the backend side</p>
                </div>
            </div>
        </div>
    )
}

export default Projects