import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='lg:mt-16 sm:mt-0 p-6'>
        <div className="flex justify-between items-center">
            
         <Link to = "/">
              <h4 className='text-2xl font-bold text-primary '>Circle</h4>
         </Link>   

            <div className='hidden md:flex space-x-8 text-paraColor'>
                <span>Home</span>
                <span>Project</span>
                <span>Services</span>
            </div>

            <div>
                <a className='hidden md:flex bg-primary p-4 px-6 hover:bg-PrimaryHover cursor-pointer  text-white '>Contact Us</a>
            </div>

        </div>
    </div>
  )
}

export default Navbar