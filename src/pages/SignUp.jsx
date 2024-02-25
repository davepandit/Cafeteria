import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/Firebase';
import { useState } from 'react';
const SignUp = () => {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  //establsihing the link btween the component and the state
  const firebase = useFirebase()
  console.log(firebase)

  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log("signup initiated")
    const result = await firebase.signupWithEmailAndPassword(email , password)
    console.log("success", result)
    


  }

  return (
    
    <>
    <div className='container mt-5 max-w-[800px]'>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='font-bold text-2xl'>Email address</Form.Label>
        <Form.Control 
        value={email}
        onChange={(e)=>(setEmail(e.target.value))}
        
        type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='font-bold text-2xl'>Password</Form.Label>
        <Form.Control 
        value={password}
        onChange={(e)=>(setPassword(e.target.value))}
        
        type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" className='bg-blue-500'>
        Create Account
      </Button>
    </Form>
    </div>

    <hr className='border border-black mt-5' />

    </>
  )
}

export default SignUp