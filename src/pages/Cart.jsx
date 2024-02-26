import React from 'react'
import { useParams } from 'react-router-dom'
import { useFirebase } from '../context/Firebase'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  //getting the url
  const params = useParams()

  //establishing the link between the context and the component
  const firebase = useFirebase()

  //data state
  const [data , setData] = useState(null)

  useEffect(()=>{
        firebase.pushDataIntoCart(params.menuId).then((value)=>(setData(value.data())))
    },[])


  //checking whether data has been received
  if(data == null) return <h1>Loading items in the cart.....</h1>



  return (
    <>
        <div className='container mt-5'>
            <h1 className='font-semibold text-2xl mb-2'>{data.itemName}</h1>
            {/* <img src={url} alt="" width="50%" style={{borderRadius:"10px"}}/> */}
            <h1 className='font-semibold mt-2 text-xl'>Details</h1>
            <h3 className='font-semibold  text-xl'>Price is Rs.{data.price}</h3>
            <button className='bg-red-500 text-white rounded-lg px-4 py-2 mt-2'
            
            >Buy</button>


        </div>


        <hr className='border border-black mt-5' />
    
    </>
  )
}

export default Cart