import Image from 'next/image'
import React from 'react'
export interface ProjectCardProps {
    direction?: 'ltr' | 'rtl';

}


const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({
    direction = 'ltr',
}) => {
  return (
    <div className={`flex md:py-5 flex-col ${direction === "ltr" ? 'md:flex-row' : "md:flex-row-reverse"} gap-7 justify-center items-center`}>
        <div className='flex  items-center flex-1'>
            <Image src="/project.png" alt="project"  width={530} height={398} className='object-none'/>
        </div>
        <div className=' flex flex-col gap-7 flex-1'>
            <div className='text-2xl md:text-5xl font-extrabold'>01</div>
            <div className='text-[20px] md:text-[32px] font-bold'>Blog Website Template</div>
            <p className='text-base text-zinc-500'>I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
            <Image src="/link-preview.svg" alt="project-link"  width={20} height={20}/>
        </div>
    </div>
  )
}

export default ProjectCard