import React, { ComponentType } from "react";
import { cn } from "@/lib/utils";

// Higher-Order Component (HOC) to add a heading
const withHeading = <P extends object>(
  WrappedComponent: ComponentType<P>,
  headingText: string,
  className?: string
): React.FC<P> => {
  const ComponentWithHeading: React.FC<P> = (props) => (
    <div className={cn("px-4 lg:px-8 xl:px-20 2xl:px-32 w-full py-10 lg:py-[60px]", className)}>
      <div className="md:px-8  font-sora">
        <div className="text-center text-5xl leading-relaxed py-5">
          My <span className="font-extrabold">{headingText}</span>
        </div>
        <WrappedComponent {...props} />
      </div>
    </div>
  );

  // Set display name for better debugging
  ComponentWithHeading.displayName = `WithHeading(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return ComponentWithHeading;
};

export default withHeading;
