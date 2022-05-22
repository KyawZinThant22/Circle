import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectData } from '../data';

const ProjectDetails = () => {
    const {id} = useParams();

  return (
    <div className='mt-16 p-6'>
        {ProjectData.map((details) => (
            <div key={details.id}>

                {details.id == id && (
                    <div>
                        <h1 className='text-3xl md:text-6xl'>{details.title}</h1>

                        <div className='flex flex-col justify-between align-baseline md:items-center space-y-8 md:space-y-0 md:flex-row mt-8'>
                                <p className=' text-paraColor text-xl md:text-2xl'>
                                    {details.subtitle}
                                </p>
                                <p className='text-lg '>Completed on <span className='text-paraColor'>{details.date}</span></p>
                        </div>
                        <img src={details.img} className = "h-[444px] w-full mt-8" alt="" />

                        <p className='mt-12 text-paraColor text-lg leading-8 tracking-wide '>
                            {details.main}
                        </p>
                    </div>
                )}

            </div>
        ))}
    </div>
  )
}

export default ProjectDetails