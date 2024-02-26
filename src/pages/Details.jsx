import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useFirebase } from '../context/Firebase'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Details = () => {
    //instance for params
    const params = useParams()
    //params.menuId gives the id of the book on the url


    //instance for navigate
    const navigate = useNavigate()
    //establishing a link between the component and the context
    const firebase = useFirebase()

    const [data , setData] = useState(null)
    const [url , setUrl] = useState(null)

    useEffect(()=>{
        firebase.getMenuById(params.menuId).then((value)=>(setData(value.data())))
    },[])

    useEffect(()=>{
        if (data){
            const imageUrl = data.imageURL
            firebase.getImage(imageUrl).then((url)=>(setUrl(url)))

        }
    },[data])

    //handle order
    const handleOrder = async()=>{
        const result = await firebase.placeOrder(params.menuId)
        console.log(result)
        navigate("/buy/orders")
        
        
    }


    //condition checking
    if(data == null) return <h1>Loading ...</h1>


  return (
    <>
        <div className='container mt-5'>
            <h1 className='font-semibold text-2xl mb-2'>{data.itemName}</h1>
            <img src={url} alt="" width="50%" style={{borderRadius:"10px"}}/>
            <h1 className='font-semibold mt-2 text-xl'>Details</h1>
            <h3 className='font-semibold  text-xl'>Price is Rs.{data.price}</h3>
            <button className='bg-red-500 text-white rounded-lg px-4 py-2 mt-2'
            onClick={handleOrder}
            >Buy</button>


        </div>


        <hr className='border border-black mt-5' />
    
    </>
  )
}

export default Details