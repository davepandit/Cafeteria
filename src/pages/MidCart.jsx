import React from 'react'
import { useParams } from 'react-router-dom'
import { useFirebase } from '../context/Firebase'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MidCart = () => {

  //navigate instance
  const navigate = useNavigate()

  const firebase = useFirebase()

  //params
  const params = useParams()
  useEffect(()=>{
    firebase.array.push(params.menuId)
    navigate("/cart")
    
  },[])


 



  return (
    <>
      <div>
        loading....
      </div>
        
    
    </>
  )
}

export default MidCart