import React from 'react'
import withHeading from '@/components/hoc/withHeading ';
import ExperienceCard from '@/components/ui/custom/ExperienceCard';

const Experience = () => {
  return (
    <div className='flex flex-col gap-5 md:gap-8 md:px-6 md:py-10 mt-5'>
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
    </div>
  )
}

export default withHeading(Experience, 'Experience',"bg-black text-white");
