import React from 'react'
import { Link } from 'react-router-dom'

const ProjectsList = ({data}) => {
  return (
  
        <>
    
                <div  className ="h-[444px] bg-white h:[444px] hover:shadow-2xl  transition ease-in delay-75 duration-200">
                    <img src={data.img} alt="" className=' w-full h-[240px] ' />
                    <div className='p-8 space-y-8'>
                        <p className='text-2xl'>{data.title}</p>
                        <p className='text-paraColor font-medium'>{data.subtitle}</p>
                        <Link to={`project/${data.id}`}>
                            <button className='text-primarys p-2 mb-12 rounded-md  hover:bg-[#c5cae9]'>Learn More</button>
                        </Link>   
                    </div>
                </div>
                    
        </>
  )
}

export default ProjectsList