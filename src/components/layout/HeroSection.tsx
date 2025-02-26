import React from "react";
import GlassIcon from "../ui/reactbits/GlassIcon";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import SocialIcons from "../ui/custom/SocialIcons";
import HeroSectionImage from "./HeroSectionImage";

const HeroSection = () => {

  return (
    <div className="mt-10 flex flex-col lg:flex-row items-center justify-center lg:justify-end font-sora lg:px-8 lg:relative w-full my-10 lg:my-16">
      <div className="order-1 lg:order-2 ">
        <HeroSectionImage/>
      </div>
      <div
        className="flex flex-col gap-3 lg:gap-5 order-2 lg:order-1 flex-1 lg:absolute lg:w-1/2 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:left-0 
      text-[28px] leading-[32px] md:text-2xl xl:text-5xl lg:py-5 mt-12 lg:mt-0
      "
      >
        <p>
          Hello, I&apos;m <span className="font-extrabold ml-4">Alvey..</span>
        </p>
        <p >
          <span className="font-extrabold">FrontEnd</span>
          <span className="font-extrabold ml-4">Developer</span>
        </p>
        <p>
          Based In <span className="font-extrabold ml-4">Bangladesh</span>
        </p>

        <article className="lg:mt-8 text-zinc-500 text-base">
          I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to specimen book.
        </article>
      </div>

      <div className="order-3 lg:absolute lg:bottom-[-30px] lg:left-0  flex flex-row gap-8 mt-8 lg:mt-0">
        <SocialIcons icon={<FaFacebook className="h-6 w-6" />} />
        <SocialIcons icon={<FaGithub className="h-6 w-6" />} />
        <SocialIcons icon={<SiLeetcode className="h-6 w-6" />} />
        <SocialIcons icon={<FaFacebook className="h-6 w-6" />} />
      </div>
    </div>
  );
};

export default HeroSection;


