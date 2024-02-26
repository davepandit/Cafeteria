import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
  const navigate = useNavigate()
  const handleRoute = ()=>{
    navigate("/testing")
    
  }
  return (
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.pexels.com/photos/1024359/pexels-photo-1024359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            <Card.Body>
                <Card.Title className='mt-4 font-bold'>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary" className='bg-blue-500 text-white rounded-lg px-4 py-2 mt-4'
                onClick={handleRoute}
                >Go somewhere</Button>
            </Card.Body>
        </Card>    
    </>
  )
}

export default Cards