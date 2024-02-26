import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState , useEffect } from 'react';
import { useFirebase } from '../context/Firebase';

const MenuCards = (props) => {

    const [url , setUrl] = useState(null)
    //establishing a link between the component and the context
    const firebase = useFirebase()

    useEffect(()=>{
        firebase.getImage(props.imageURL).then((url)=>(setUrl(url)))
    },[])
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
                <Button variant="primary" className='bg-blue-500 text-white rounded-lg px-4 py-2 mt-4'>Buy</Button>
            </Card.Body>
        </Card>    
    </>
  )
}

export default MenuCards