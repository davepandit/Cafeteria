import React from 'react'
import {Link} from "react-router-dom"
// import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const NavItems = [
    {
        id:1,
        name:"Home",
        link:'/'
    },
    {
        id:2,
        name:"Menu",
        link:'/menu'
    },
    {
        id:3,
        name:"Contact",
        link:'/contact'
    },

]
const DropdownItems = [
    {
        id:1,
        name:"Beverages",
        link:'/beverages'
    },
    {
        id:2,
        name:"Food Items",
        link:'/fooditems'
    },
    {
        id:3,
        name:"Deserts",
        link:'/deserts'
    },
    {
        id:4,
        name:"Snacks",
        link:'/snacks'
    },

]

const NavBar = () => {
    const navigate = useNavigate()
    //handle route 
    const handleSignUpRoute = ()=>{
        navigate("/signup")

    }

    const handleSignInRoute = ()=>{
        navigate("/signin")

    }


  return (
    <>
        <div className='bg-white shadow-sm'>
            <div className='container flex justify-between py-4 sm:py-3'>
                {/* logo section */}
                <div className='font-bold text-3xl'>
                    <Link to="/">Cafeteria</Link>
                    
                </div>
                {/* other parts of the NavBar */}
                <div>
                    <ul className='flex items-center gap-10'>
                        {
                            NavItems.map(({id , name , link}) =>{
                                return (
                                    <li key={id} className='hidden md:block'>
                                        <Link to={link}
                                        className='inline-block hover:text-primary text-xl font-semibold'
                                        >{name}</Link>
                                    </li>
                                )
                            }
                            
                        )
                        }

                        {/* Dropdown cover */}
                        <li className='cursor-pointer group relative hidden md:block'>
                            <Link to="/categories" className='inline-block hover:text-primary text-xl font-semibold'>
                                <div className='flex items-center gap-[2px] py-2'>
                                    Categories
                                    <span>
                                        <IoIosArrowDropdownCircle 
                                        className='group-hover:rotate-180 duration-300'
                                        />
                                    </span>
                                    
                                </div>
                            
                            
                            </Link>
                            {/* Dropdown implementation */}
                            <div className='absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2'>
                                <ul>
                                    {
                                        DropdownItems.map(({id , name , link})=>{
                                            return(
                                                <li key={id}>
                                                    <Link to={link}
                                                    className='text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20'
                                                    
                                                    >
                                                        {name} 
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </div>

                        </li>
                        {/* Sign Up button section */}
                        <li>
                            <button className='flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300 rounded-lg'
                            onClick={handleSignUpRoute}
                            >
                                <FaUserCircle />
                                Sign Up

                            </button>
                        </li>

                        {/* Sign in button section */}
                        <li>
                            <button className='flex justify-center items-center gap-2 bg-pink-500 text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300 rounded-lg'
                            onClick={handleSignInRoute}
                            >
                                <FaUserCircle />
                                Sign In

                            </button>
                        </li>

                        
                    </ul>
                </div>


            </div>
            
        </div>
    </>
  )
}

export default NavBar