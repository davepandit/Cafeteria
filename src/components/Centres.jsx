import React from 'react'
import Cards from '../utils/Cards'
import CardGroup from 'react-bootstrap/CardGroup';

const Centres = () => {
  return (
    <>
    <div className='container'>
          <div className='flex justify-center mt-7 '>
              <h1 className='text-3xl font-bold '>Our Locations</h1>
          </div>
          <div className='cards grid grid-cols-3 gap-16 mt-20 '>
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
          </div>
        </div>
    </>
  )
}

export default Centres