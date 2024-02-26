import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/Firebase';
import { useState } from 'react';

const AddMenu = () => {
    const [itemName , setName] = useState("")
    const [description , setDescription] = useState("")
    const [price , setPrice] = useState("")
    const [category , setCategory] = useState("")
    const [coverPic , setCoverPic] = useState("")

    //establishing a link between the component and the context
    const firebase = useFirebase()
    

    //habdle submit 
    const handleSubmit = async(e)=>{
        e.preventDefault()
        await firebase.addMenus(itemName , description , price , category , coverPic )

    }
  return (
   <>
    <div className='container mt-5 max-w-[800px]'>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='font-bold text-2xl'>Enter Item Name</Form.Label>
        <Form.Control 
        value={itemName}
        onChange={(e)=>(setName(e.target.value))}
        
        type="text" placeholder="Enter Item Name" />
        <Form.Text className="text-muted">
          We'll never share your details with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='font-bold text-2xl'>Description</Form.Label>
        <Form.Control 
        value={description}
        onChange={(e)=>(setDescription(e.target.value))}
        
        type="text" placeholder="Description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='font-bold text-2xl'>Price</Form.Label>
        <Form.Control 
        value={price}
        onChange={(e)=>(setPrice(e.target.value))}
        
        type="number" placeholder="price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='font-bold text-2xl'>Category</Form.Label>
        <Form.Control 
        value={category}
        onChange={(e)=>(setCategory(e.target.value))}
        
        type="text" placeholder="category" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='font-bold text-2xl'>Cover Picture</Form.Label>
        <Form.Control 
        onChange={(e)=>(setCoverPic(e.target.files[0]))}
        
        type="file" placeholder="CoverImage" />
      </Form.Group>

      <Button variant="primary" type="submit" className='bg-blue-500'>
        Add Item
      </Button>
    </Form>
    </div>

    <hr className='border border-black mt-5' />
   </>
  )
}

export default AddMenu