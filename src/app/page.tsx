import Experience from "@/components/layout/Experience";
import HeroSection from "@/components/layout/HeroSection";
import Skills from "@/components/layout/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px]  min-h-screen  pb-20 gap-16 ">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <HeroSection />
        <Skills />
        <Experience />
      </main>

    </div>
  );
}
