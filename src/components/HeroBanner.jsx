import React from 'react'
import PrimaryButton from '../utils/PrimaryButton'
import heroBg from "../assets/heroBg.png"
import hero from "../assets/hero.png"

//defining the style for the background 
const Bgstyle = {
    backgroundImage:`url(${heroBg})`,
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
                        <img src={hero} alt="" className='rounded-3xl w-full sm:scale-125 sm:translate-y-16'/>
                    </div>

                </div>
            </div>
        </div>    
    </>
  )
}

export default HeroBanner