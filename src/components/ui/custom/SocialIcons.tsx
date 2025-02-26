import { cn } from "@/lib/utils";
import React from "react";

export interface SocialIconsItem {
  icon: React.ReactElement;
  title?: string;
  className?: string;
}

const SocialIcons: React.FunctionComponent<SocialIconsItem> = ({ icon , title ,className}) => {
  return <div className={cn("p-4 border-2 border-black rounded flex flex-col items-center justify-center",className)}>{icon}
  {title && <div className="mt-8">{title}</div>}
  </div>;
};

export default SocialIcons;
