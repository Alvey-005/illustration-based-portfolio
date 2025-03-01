import { cn } from "@/lib/utils";
import React from "react";

export interface SocialIconsItem {
  icon: React.ReactElement;
  title?: string;
  className?: string;
}

const SocialIcons: React.FunctionComponent<SocialIconsItem> = ({ icon , title ,className}) => {
  return <div className={cn("p-4 border-2 border-black rounded flex flex-col items-center justify-around",className)}>{icon}
  {title && <div className="text-xl font-bold">{title}</div>}
  </div>;
};

export default SocialIcons;
