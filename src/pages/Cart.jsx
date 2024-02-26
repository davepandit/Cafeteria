import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useFirebase } from '../context/Firebase'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CartCards from '../utils/CartCards'

const Cart = () => {
    
    //instance for navigate
    const navigate = useNavigate()
    //establishing a link between the component and the context
    const firebase = useFirebase()

    const [data , setData] = useState([])
    

    useEffect(()=>{
        
        firebase.array.map((id)=>{
            firebase.pushDataIntoCart(id).then((value)=>(setData(value.docs)))

        })
        
    },[firebase.array])

    

    
    useEffect(()=>{
        console.log(firebase.array)
    },[])

    

    

    


    

  return (
    <>
        <div className='container mt-5'>
           <h1>Your Added Items</h1>
           <div className='grid grid-cols-3 '>

                {data.map((data)=>(
                    <CartCards key={data.id} id={data.id} {...data.data()} />
    

                ))}

            </div>

        </div>


        <hr className='border border-black mt-5' />
    
    </>
  )
}

export default Cart