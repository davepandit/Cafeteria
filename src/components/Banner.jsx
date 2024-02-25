import React from 'react'
import apple from "../assets/apple.png"
import kiwi from "../assets/kiwi.png"
import lemon from "../assets/lemon.png"
import leaf from "../assets/leaf.png"
import tomato from "../assets/tomato.png"
import PrimaryButton from '../utils/PrimaryButton'


const Banner = () => {
  return (
    <>
        <div className='container py-14 relative'>
            <div className=''>
                <h1 className='py-8 tracking-wider text-2xl font-semibold text-dark text-center '>
                    Taste the healthy differernce
                </h1>

                {/* text content */}
                <div className='space-y-10'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                        <div>
                            <p>
                            We know that <span className='text-primary'>time</span> is the greatest value in the modern world.Our healthy meal plan delivery service Good Food in Miami is the answer for those who want to eat healthily, saving time for buying food and preparing delicious, healthy meals.
                            </p>

                        </div>
                        <div></div>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                    <div></div>

                        <div>
                            <p>
                            We know that <span className='text-primary'>time</span> is the greatest value in the modern world.Our healthy meal plan delivery service Good Food in Miami is the answer for those who want to eat healthily, saving time for buying food and preparing delicious, healthy meals.
                            </p>

                        </div>
                    </div>
                </div>

                {/* button section */}
                <div className='flex justify-center mt-10 sm:mt-14'>
                    <PrimaryButton/>
                </div>
            </div>

            {/* fruits */}
            <div className='absolute top-5 right-16 sm:bottom-0 sm:left-0  sm:opacity-100'>
                <img src={leaf} alt="" className='max-w-[160px]'/>
            </div>

            

            <div className='absolute bottom-16 left-16 sm:bottom-0 sm:left-0  sm:opacity-100'>
                <img src={tomato} alt="" className='max-w-[280px]'/>
            </div>

            

           
            

        </div>
    </>
  )
}

export default Banner