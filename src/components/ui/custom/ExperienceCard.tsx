import React from 'react'

const ExperienceCard = () => {
    return (
        <div className="w-full bg-black text-white rounded-[10px] py-[30px] px-6 border border-zinc-500">
          <div className="flex flex-col md:flex-row gap-[30px] md:items-center justify-between mb-7">
            <div className="flex items-center gap-[30px]">
              <div className="w-8 h-8 flex items-center justify-center">
                <img
                  src="/google-logo.svg"
                  alt="Google logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Lead Software Engineer at Google</h2>
            </div>
            <span className="text-zinc-300 font-semibold">Nov 2019 - Present</span>
          </div>
          <p className="text-zinc-300 text-base">
            As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for
            Google&apos;s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the
            enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.
          </p>
        </div>
      )
}

export default ExperienceCard;