import { cloneElement, ReactNode, SVGProps } from "react";

export const IconRenderer = (svg: ReactNode) => {
  return (props: SVGProps<SVGSVGElement>) =>
    cloneElement(svg as React.ReactElement, { ...props });
};
