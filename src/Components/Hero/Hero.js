import React from 'react'
import hero from "../../image/Assets/Hero Section/hero.png"

const Hero = () => {
  return (
    <div className='p-6 md:mt-20'>
        <div className='flex flex-col md:flex-row justify-between items-center  space-y-6 md:space-y-0'>
            {/* left side  */}
            <div className='space-y-8 text-center md:text-left'>
                <h1 className='text-3xl max-w-sm md:leading-tight text-textColor font-bold tracking-wide md:max-w-lg md:text-6xl'>
                    Empower Your Business With Stunning Design!
                </h1>
                <p className='text-paraColor  tracking-wide md:leading-normal max-w-md md:text-lg'>
                    Circle is a digital design and development studio. We design and develop astonishing websites and mobile apps.
                </p>
                <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
                    <a className='p-4 px-6 bg-primary text-white w-26 mx-auto md:mx-0 cursor-pointer hover:bg-PrimaryHover' >Get in Touch</a>
                    <a className='p-4 px-6 text-paraColor'>See Our Work</a>
                </div>
            </div>
            {/* right side */}
            <div>
                <img src={hero} className = "max-w-xm md:max-w-lg md:-mt-12" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero