import HeroSection from "@/components/layout/HeroSection";
import Skills from "@/components/layout/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px]  min-h-screen  pb-20 gap-16 px-4 lg:px-8 xl:px-20 2xl:px-32">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <HeroSection />
        <Skills />
      </main>

    </div>
  );
}
