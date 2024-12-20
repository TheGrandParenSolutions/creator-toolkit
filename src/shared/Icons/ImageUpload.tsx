import type { SVGProps } from "react";

export function ImageUpload(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
      >
        <path
          strokeLinejoin="round"
          d="M21.25 13V8.5a5 5 0 0 0-5-5h-8.5a5 5 0 0 0-5 5v7a5 5 0 0 0 5 5h6.26"
        ></path>
        <path
          strokeLinejoin="round"
          d="m3.01 17l2.74-3.2a2.2 2.2 0 0 1 2.77-.27a2.2 2.2 0 0 0 2.77-.27l2.33-2.33a4 4 0 0 1 5.16-.43l2.47 1.91M8.01 10.17a1.66 1.66 0 1 0-.02-3.32a1.66 1.66 0 0 0 .02 3.32"
        ></path>
        <path strokeMiterlimit={10} d="M18.707 15v5"></path>
        <path
          strokeLinejoin="round"
          d="m21 17.105l-1.967-1.967a.46.46 0 0 0-.652 0l-1.967 1.967"
        ></path>
      </g>
    </svg>
  );
}
