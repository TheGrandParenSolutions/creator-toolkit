import { SVGProps } from "react";

export const CTCheckIcon = (props: SVGProps<SVGSVGElement>) => {
  const { width = 24, height = 24 } = props;

  return (
    <svg
      {...props}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <g fill="none">
        <path
          fill="url(#fluentColorCheckmarkCircle320)"
          d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16S8.268 2 16 2s14 6.268 14 14"
        ></path>
        <path
          fill="url(#fluentColorCheckmarkCircle321)"
          d="M22.707 12.707a1 1 0 0 0-1.414-1.414L14.5 18.086l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0z"
        ></path>
        <defs>
          <linearGradient
            id="fluentColorCheckmarkCircle320"
            x1={3}
            x2={22.323}
            y1={7.25}
            y2={27.326}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#52d17c"></stop>
            <stop offset={1} stopColor="#22918b"></stop>
          </linearGradient>
          <linearGradient
            id="fluentColorCheckmarkCircle321"
            x1={12.031}
            x2={14.162}
            y1={11.969}
            y2={22.66}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff"></stop>
            <stop offset={1} stopColor="#e3ffd9"></stop>
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
};

export const CTDownloadIcon = (props: SVGProps<SVGSVGElement>) => {
  const { width = 32, height = 24 } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8v8m0 0l3.5-3.5M12 16l-3.5-3.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"
      ></path>
    </svg>
  );
};
