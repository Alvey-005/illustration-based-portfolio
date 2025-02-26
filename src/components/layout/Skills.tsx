import React from 'react'
import { FaFacebook, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import SocialIcons from "../ui/custom/SocialIcons";

const Skills = () => {
  return (
    <div className='w-full md:px-8 my-10 lg:my-16 font-sora'>
        <div className="text-center text-5xl leading-relaxed py-5 mb-16">My <span className='font-extrabold'>Skills</span></div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[6vw] md:gap-[3vw] lg:gap-[2vw] ">
        <SocialIcons icon={<FaFacebook className="h-12 w-12" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500' title="facebook"/>
        <SocialIcons icon={<FaFacebook className="h-12 w-12" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500' title="facebook"/>
        <SocialIcons icon={<FaFacebook className="h-12 w-12" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500' title="facebook"/>
        <SocialIcons icon={<FaFacebook className="h-12 w-12" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500' title="facebook"/>
        <SocialIcons icon={<FaFacebook className="h-12 w-12" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500' title="facebook"/>
        <SocialIcons icon={<FaFacebook className="h-12 w-12" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500' title="facebook"/>



</div>
    </div>
  )
}

export default Skills