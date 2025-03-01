import React from 'react'
import withHeading from '../hoc/withHeading '
import ProjectCard from '../ui/custom/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col gap-5 md:gap-8 md:px-6 md:py-10 mt-5'>
      <ProjectCard/>
      <ProjectCard direction='rtl'/>
      <ProjectCard/>
      <ProjectCard direction='rtl'/>
    </div>
  )
}

export default withHeading(Projects, "Projects", 'bg-black text-white')