import React from 'react'
import { useNavigate } from 'react-router-dom'

const Orders = () => {
  const navigate = useNavigate()
  const handlePayment = ()=>{
    navigate("/menu")
    alert("Payment successful")
  }
  return (
    <>
        <div className='mt-5 font-bold text-3xl container'>
            <button className='bg-red-500 rounded-lg px-4 py-2 text-white text-xl'
            onClick={handlePayment}
            >
              Proceed for payment
            </button>
        </div>   


         <hr className='border border-black mt-5' /> 
    </>
  )
}

export default Orders