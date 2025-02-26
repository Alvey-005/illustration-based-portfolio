import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        </div>
        <div className="text-xl font-bold font-sora">Personal</div>
      </div>
    </div>
  );
};

export default Logo;
