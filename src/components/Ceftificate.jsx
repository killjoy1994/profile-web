import React from 'react'
import Glints from "../assets/glints.png";
import Laravel from "../assets/laravel.png";
import Udemy from "../assets/udemy.jpg";

function Ceftificate() {
    return (
        <div id='certificate' className='min-h-[800px] mx-auto max-w-[1300px] px-4'>
            <h2 className='text-slate-50 text-6xl mb-16'>Cerfiticates</h2>
            <div className='grid md:grid-cols-3 gap-x-5 gap-y-20'>
                <div className=''>
                    <div className='h-[250px]'>
                        <img className='w-full h-full object-center object-cover' src={Glints} alt="MyMarket" />
                    </div>
                    <div className='flex items-center justify-between mt-5'>
                        <h3 className='text-slate-50 text-xl'>Glints Academy Frontend Developer</h3>
                        <a className='text-slate-50 text-lg hover:-skew-y-3' href="">View</a>

                    </div>
                </div>
                <div className=''>
                    <div className='h-[250px]'>
                        <img className='w-full h-full object-center object-cover' src={Laravel} alt="MyMarket" />
                    </div>
                    <div className='flex items-center justify-between mt-5'>
                        <h3 className='text-slate-50 text-xl'>Sanbercode Laravel Developer</h3>
                        <a className='text-slate-50 text-lg hover:-skew-y-3' href="https://sanbercode.com/certificate/in/5bc79883-a2dd-49b6-b0c9-d1daca7592f5">View</a>
                    </div>
                </div>
                {/* UC-c406ec0e-0434-46c2-9311-bbf399d649c1 */}
                <div className=''>
                    <div className='h-[250px]'>
                        <img className='w-full h-full object-center object-cover' src={Udemy} alt="MyMarket" />
                    </div>
                    <div className='flex items-center justify-between mt-5'>
                        <h3 className='text-slate-50 text-xl'>Understanding Typescript</h3>
                        <a className='text-slate-50 text-lg hover:-skew-y-3' href="https://ude.my/UC-c406ec0e-0434-46c2-9311-bbf399d649c1">View</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ceftificate