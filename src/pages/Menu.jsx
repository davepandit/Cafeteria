import React from 'react'
import { useFirebase } from '../context/Firebase'
import { useState , useEffect } from 'react'
import MenuCards from '../utils/MenuCards'
import CardGroup from 'react-bootstrap/CardGroup';
import { Row, Col } from 'react-bootstrap';

const Menu = () => {

    const [menus , setMenus] = useState([])
    //establishing a link between the component and the context
    const firebase = useFirebase()


    useEffect(()=>{
        firebase.listAllMenus().then((menus)=>(setMenus(menus.docs)))
    },[])
  return (
    <>
        <div className='container mt-5'>
            <div className='grid grid-cols-3 '>

                    {menus.map((menu)=>(
                        <MenuCards key={menu.id} id={menu.id} {...menu.data()} />
                        

                    ))}

            </div>
            

        </div>

        <hr className='border border-black mt-5' />
    
    </>
  )
}

export default Menu