import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaTimes, FaBars } from 'react-icons/fa'

export default function Header() {
const [isopen,setisopen]=useState(false)
    const navbar = [
        {
            name: "Home",
            to: "/"
        },
        {
            name: "About",
            to: "/about"
        },
        {
            name: "Image",
            to: "/img"
        },
        {
            name: "CV",
            to: "/cv"
        },
        // {
        //     name: "Contact",
        //     to: "/contact"
        // },
    ]

    return (
        <header className="shadow-lg  sticky top-0 h-18">
            <nav className='bg-white flex justify-between items-center'>

            
                <div className='flex justify-center items-center'>
                   

                {/* <div className='bg-white flex justify-between  items-center'> */}
                <div className={` bg-white flex sm:z-auto  static left-0 w-full sm:w-auto sm:pl-0  transition-all duration-500 ease-in `}>

             <div className='h-[80px]'>
            
             <div onClick={()=>setisopen(!isopen)} className='sm:hidden bg-white text-amber-900 flex items-center right-10 w-8 h-8 top-6 p-2 rounded-lg shadow-md absolute cursor-pointer'>
                    {
                        isopen? <FaTimes/>:<FaBars/>
                    }
                        
                       
                    </div>
             </div>
                    <ul className={` bg-white flex sm:z-auto  absolute sm:static left-[-20px] w-full sm:w-auto sm:pl-0  transition-all duration-500 ease-in ${ isopen ?  'top-12':'top-[-500px]'} flex-col  sm:flex-row justify-between m-4`}>
                        {
                            navbar.map((item, index) => (
                                <li key={index} className='m-2'>
                                    <NavLink className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-b hover:text-orange-700 lg:p-0`
                                    } to={item.to}>
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                </div>
              
            </nav>
        </header>
    );
}





// <ul className='flex  flex-col justify-between m-4'>
{/* <li className='m-2'>
                            <NavLink to="/" className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-b hover:text-orange-700 lg:p-0`
                            }>Home</NavLink>
                        </li>
                        <li className='m-2'>
                            <NavLink to="/about" className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-b hover:text-orange-700 lg:p-0`
                            }>About</NavLink>
                        </li>
                        <li className='m-2'>
                            <NavLink to="/img" className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-b hover:text-orange-700 lg:p-0`
                            }> Image</NavLink>
                        </li>
                        <li className='m-2'>
                            <NavLink to="/cv" className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-b hover:text-orange-700 lg:p-0`
                            }>CV</NavLink>
                        </li> */}
{/* <li className='m-2'>
                    <NavLink  to="/project" className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-b hover:text-orange-700 lg:p-0`
                                    }>Project</NavLink>
                    </li>

            
                   <li className='m-2'>
                    <NavLink  to="/contact" className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-b hover:text-orange-700 lg:p-0`
                                    }>Contact</NavLink>
                    </li> */}

// </ul>
