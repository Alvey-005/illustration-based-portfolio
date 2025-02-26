import Image from "next/image";
import Logo from "../ui/custom/Logo";
import DesktopNavBar from "../ui/custom/DesktopNavBar";
import { Button } from "../ui/shad-cn/button";

const Header = () => {
  return (
    <header className="fixed left-1/2 top-0 z-50 mt-7 flex w-11/12 max-w-7xl -translate-x-1/2 flex-col items-center rounded-full bg-black/20 p-3 backdrop-blur-md md:rounded-full">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <DesktopNavBar />
          <div className="hidden md:block">
            <Button className="px-5 py-4 h-[unset]" size="lg">
              <div className="font-sora text-xl">Resume</div>
              <Image
                src="/download.svg"
                width={20}
                height={20}
                alt="download"
              />
            </Button>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
              <Image src="/burger-menu.svg" alt="Menu" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
