import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/Firebase';
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const firebase = useFirebase()


  const navigate = useNavigate()
  useEffect(()=>{
    if(firebase.isLoggedIn) navigate("/")
  },[firebase , navigate])

  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  //establsihing the link btween the component and the state
  console.log(firebase)

  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log("signin initiated")
    const result = await firebase.signinWithEmailAndPassword(email , password)
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
       Log In
      </Button>
    </Form>
    <h1 className='mt-7 font-bold text-3xl '>OR</h1>
    <button className='bg-red-500 text-white font-semibold text-xl px-4 py-2 rounded-lg mt-3'
    onClick={firebase.signinWithGoogle}
    >Sign In with Google</button>
    </div>
    <hr className='border border-black mt-5'/>
    </>
  )
}

export default SignIn