import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
    return (
        <div className="px-4 lg:px-8 xl:px-20 2xl:px-32 w-full">
            <div className="mt-10 flex flex-col lg:flex-row  items-center justify-between  font-sora lg:px-8 lg:relative w-full my-10 lg:my-16 lg:gap-20 ">
                <div className="">
                    <Image src="/about-me.svg" alt="hero-image" width={525} height={572} />
                </div>
                <div className='xl:flex-1 lg:w-[90%] xl:w-1/2'>
                    <div className="text-5xl leading-relaxed py-5">
                        About <span className="font-extrabold">Me</span>
                    </div>
                    <div className="text-justify flex flex-col text-zinc-500 text-base">
                        <p className="mt-5">
                        I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js).
                         I am very enthusiastic about bringing the technical and visual aspects of digital 
                        products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                        </p>
                        <p className="mt-5">
                        I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and
                         learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey,
                         I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                        </p>
                        <p className="mt-5">
                        When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker,
                         witnessing the journey of early startups or enjoying some free time.
                         You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
                    </div>
                </div>

            </div>
        </div>)
}

export default AboutMe