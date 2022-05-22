import React from 'react'
import Simplify from "../image/Assets/Projects Section/one.jpg"
import DashCoin from "../image/Assets/Projects Section/two.jpg"
import Vectorify from "../image/Assets/Projects Section/three.jpg"
import { ProjectData } from '../data'
import ProjectsList from '../Components/ProjectsList/ProjectsList'

const Project = () => {
  return (
    <div className='p-6 space-y-16'>
        <h1 className='text-4xl tracking-wide text-textColor font-bold'>Recent Projects</h1>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {ProjectData.map((data) => (
                <ProjectsList data={data} key = {data.id} />
            ))}
        </div>
    </div>
  )
}

export default Project