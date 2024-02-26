import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const PrimaryButton = () => {

  const navigate = useNavigate()

  const handleRoute = ()=>{
    navigate("/menu")
  }
  return (
    <>
        <div className='flex items-center group'>
            <button className='bg-primaryDark h-[40px] text-white px-3 py-2 cursor-pointer'
            onClick={handleRoute}
            >
                Choose Your Meal Plan
            </button>
            <FaArrowRight className='inline-block group-hover:!translate-x-2 duration-200 p-2 text-base h-[40px] w-[40px] bg-primaryDark text-white'/>

        </div>
    </>
  )
}

export default PrimaryButton