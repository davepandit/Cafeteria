import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState , useEffect } from 'react';
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';

const MenuCards = (props) => {

    const [url , setUrl] = useState(null)
    //establishing a link between the component and the context
    const firebase = useFirebase()

    //navigate instance
    const navigate = useNavigate()

    useEffect(()=>{
        firebase.getImage(props.imageURL).then((url)=>(setUrl(url)))
    },[])

    //handle ti click functionality
    const handleRouting =()=>{
        navigate(`/details/view/${props.id}`)
    }

    //add to cart
    const handleCartRouting = ()=>{
        navigate(`/menu/cart/${props.id}`)
    }

  return (
    <>
        <Card style={{ width: '18rem', margin:"20px"}}>
            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title className='mt-4 font-bold'>{props.itemName}</Card.Title>
                <Card.Text>
                {props.description}
                </Card.Text>
                <Card.Text>
                    The price of the {props.category} is Rs.
                {props.price}
                </Card.Text>
                <div className='flex justify-evenly'>
                    <Button variant="primary" className='bg-blue-500 text-white rounded-lg px-4 py-2 mt-4'
                    onClick={handleRouting}
                    >View</Button>

                    <Button variant="primary" className='bg-blue-500 text-white rounded-lg px-4 py-2 mt-4'
                    onClick={handleCartRouting}
                    >AddToCart</Button>
                </div>
            </Card.Body>
        </Card>    
    </>
  )
}

export default MenuCards