import React from 'react'
import {Link} from "react-router-dom"
import { RiArrowDropDownLine } from "react-icons/ri";


const NavItems = [
    {
        id:1,
        name:"Home",
        link:'/'
    },
    {
        id:2,
        name:"About",
        link:'/about'
    },
    {
        id:3,
        name:"Contact",
        link:'/contact'
    },

]

const NavBar = () => {
  return (
    <>
        <div className='bg-white shadow-sm'>
            <div className='container flex justify-between py-4 sm:py-3'>
                {/* logo section */}
                <div className='font-bold text-3xl'>
                    Cafeteria
                </div>
                {/* other parts of the NavBar */}
                <div>
                    <ul className='flex items-center gap-10'>
                        {
                            NavItems.map(({id , name , link}) =>{
                                return (
                                    <li key={id}>
                                        <Link to={link}
                                        className='inline-block hover:text-primary text-xl font-semibold'
                                        >{name}</Link>
                                    </li>
                                )
                            }
                            
                        )
                        }
                    </ul>
                </div>


            </div>
            
        </div>
    </>
  )
}

export default NavBar