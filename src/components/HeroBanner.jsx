import React from 'react'
import PrimaryButton from '../utils/PrimaryButton'
import back from "../assets/back.webp"

//defining the style for the background 
const Bgstyle = {
    backgroundImage:`url(${back})`,
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    backgroundSize:"cover",
    width:"100%",
    height:"100%",
}

const HeroBanner = () => {
  return (
    <>
        <div style={Bgstyle} className='overflow-x-hidden relative z-[-1]'>
            <div className='container py-16 sm:py-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]'>
                    {/* text content */}
                    <div className='space-y-7 text-dark order-2 sm:order-1'>
                        <h1 className='text-5xl'>
                            Fresh & Healthy Meal Plan <span className='text-dark font-cursive text-7xl'>Delivery</span> in Miami
                        </h1>
                        <p className='lg:pr-64'>
                            Delicious Meals Delivered to Your Door from $132.95 per week
                        </p>
                        {/* button part  */}
                        <PrimaryButton />
                    </div>
                    {/* image content */}
                    <div className='relative z-30 order-1 sm:order-2'>
                        <img src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='rounded-3xl w-full sm:scale-125 sm:translate-y-16'/>
                    </div>

                </div>
            </div>
        </div>    
    </>
  )
}

export default HeroBanner