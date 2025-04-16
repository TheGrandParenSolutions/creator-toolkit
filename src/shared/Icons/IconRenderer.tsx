import { cloneElement, ReactNode, SVGProps } from "react";

export const IconRenderer = (svg: ReactNode) => {
  return (props: SVGProps<SVGSVGElement> & { size?: number }) => {
    const { size, ...rest } = props;
    return cloneElement(svg as React.ReactElement, {
      ...rest,
      height: size || 18,
      width: size || 18,
    });
  };
};
