import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (isSuccess) => {
    isSuccess ? toast.success("Your message has been sent ! Thank you...") : toast.error("Ooops something went wrong...")
}


const Contact = () => {
    const [formValues, setFormValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
    })
    const [isLoading, setIsloading] = useState(false)

    const form = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setIsloading(true)
            const result = await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
            console.log(result)
            setIsloading(false)
            notify(true)
        } catch (error) {
            console.log(error)
            setIsloading(false)
            notify(false)
        }
        setFormValues({
            firstname: "",
            lastname: "",
            email: "",
            message: "",
        })
    }

    return (
        <div id='contact' className='min-h-[800px] mx-auto max-w-[1300px] px-4 mt-48'>
            <h2 className='text-slate-50 text-6xl mb-16'>CONTACT</h2>
            <div className='mx-auto bg-slate-900 max-w-[1000px] px-5 pt-10 pb-16 rounded-md flex items-center flex-col'>
                <p className='text-slate-50 text-4xl'>Let's get in touch!</p>
                <form onSubmit={handleSubmit} ref={form} className='mt-10 flex flex-col gap-y-4 justify-center items-center w-full md:w-[500px]'>
                    <label className='w-full text-slate-50 text-lg' htmlFor="">
                        Firstname
                        <input required className='w-full mt-2 px-2 py-1 text-slate-700' type="text" name="firstname" placeholder='Enter your firstname...' value={formValues.firstname} onChange={e => setFormValues({ ...formValues, firstname: e.target.value })} />
                    </label>
                    <label className='w-full text-slate-50 text-lg' htmlFor="">
                        Lastname
                        <input className='w-full mt-2 px-2 py-1 text-slate-700' type="text" name="lastname" placeholder='Enter your lasttname...' value={formValues.lastname} onChange={e => setFormValues({ ...formValues, lastname: e.target.value })} />
                    </label>
                    <label className='w-full text-slate-50 text-lg' htmlFor="">
                        Email
                        <input required className='w-full mt-2 px-2 py-1 text-slate-700' type="email" name="email" placeholder='Enter your email...' value={formValues.email} onChange={e => setFormValues({ ...formValues, email: e.target.value })} />
                    </label>
                    <label className='w-full text-slate-50 text-lg' htmlFor="">
                        Message
                        <textarea required className='w-full mt-2 px-2 py-1 text-slate-700' name="message" placeholder='Enter your message...' value={formValues.message} onChange={e => setFormValues({ ...formValues, message: e.target.value })} />
                    </label>
                    <button className='py-1 px-2 text-slate-50 text-lg rounded-md hover:brightness-90 tracking-[2px] bg-blue-500 w-full mt-4'>{isLoading ? "Sending your message..." : "Send"}</button>
                </form>
            </div>
        </div>
    )
}

export default Contact