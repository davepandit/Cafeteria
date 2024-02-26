import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import BeverageCard from "../utils/BeverageCard"

const Beverages = () => {
  const [data , setData] = useState([])

  const firebase = useFirebase()
  useEffect(()=>{
    firebase.snacks().then((data)=>(setData(data.docs)))
  },[])
  return (
    <>
      
      <div className='container'>
        <div>Beverages</div>
        <div className='grid grid-cols-3'>
          {data.map((menu)=>(
              <BeverageCard key={menu.id} id={menu.id} {...menu.data()} />          
          ))}
        </div>
      </div>


      <hr className='border border-black mt-5' />
    </>
    

  )
}

export default Beverages