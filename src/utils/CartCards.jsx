import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState , useEffect } from 'react';
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';

const CartCards = (props) => {

    
  return (
    <>
        <Card style={{ width: '18rem', margin:"20px"}}>
            {/* <Card.Img variant="top" src={url} /> */}
            <Card.Body>
                <Card.Title className='mt-4 font-bold'>{props.itemName}</Card.Title>
                <Card.Text>
                {props.description}
                </Card.Text>
                <Card.Text>
                    The price of the {props.category} is Rs.
                {props.price}
                </Card.Text>
                
            </Card.Body>
        </Card>    
    </>
  )
}

export default CartCards