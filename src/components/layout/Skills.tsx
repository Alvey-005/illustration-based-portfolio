import React from 'react'
import { FaFacebook } from "react-icons/fa";

import SocialIcons from "@/components/ui/custom/SocialIcons";
import withHeading from '@/components/hoc/withHeading ';

const Skills = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[6vw] md:gap-[3vw] lg:gap-[2vw] w-full mt-5 py-5">
      <SocialIcons icon={<FaFacebook className="h-16 w-16" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500 ' title="facebook" />
      <SocialIcons icon={<FaFacebook className="h-16 w-16" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500 ' title="facebook" />
      <SocialIcons icon={<FaFacebook className="h-16 w-16" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500 ' title="facebook" />
      <SocialIcons icon={<FaFacebook className="h-16 w-16" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500 ' title="facebook" />
      <SocialIcons icon={<FaFacebook className="h-16 w-16" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500 ' title="facebook" />
      <SocialIcons icon={<FaFacebook className="h-16 w-16" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500 ' title="facebook" />
      <SocialIcons icon={<FaFacebook className="h-16 w-16" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500 ' title="facebook" />
      <SocialIcons icon={<FaFacebook className="h-16 w-16" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500 ' title="facebook" />
      <SocialIcons icon={<FaFacebook className="h-16 w-16" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500 ' title="facebook" />
      <SocialIcons icon={<FaFacebook className="h-16 w-16" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500 ' title="facebook" />
      <SocialIcons icon={<FaFacebook className="h-16 w-16" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500 ' title="facebook" />
      <SocialIcons icon={<FaFacebook className="h-16 w-16" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500 ' title="facebook" />
      <SocialIcons icon={<FaFacebook className="h-16 w-16" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500 ' title="facebook" />
      <SocialIcons icon={<FaFacebook className="h-16 w-16" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500 ' title="facebook" />
      <SocialIcons icon={<FaFacebook className="h-16 w-16" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500 ' title="facebook" />
      <SocialIcons icon={<FaFacebook className="h-16 w-16" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500 ' title="facebook" />
      <SocialIcons icon={<FaFacebook className="h-16 w-16" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500 ' title="facebook" />
      <SocialIcons icon={<FaFacebook className="h-16 w-16" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500 ' title="facebook" />
      <SocialIcons icon={<FaFacebook className="h-16 w-16" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500 ' title="facebook" />
      <SocialIcons icon={<FaFacebook className="h-16 w-16" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500 ' title="facebook" />
      <SocialIcons icon={<FaFacebook className="h-16 w-16" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500 ' title="facebook" />
      <SocialIcons icon={<FaFacebook className="h-16 w-16" />} className='p-6 aspect-square hover:bg-black hover:text-white transition-color duration-500 ' title="facebook" />
    </div>
  )
}

export default withHeading(Skills, 'Skills');