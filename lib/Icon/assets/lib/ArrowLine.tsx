import type { SVGProps } from "react";
const ArrowLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="m9.473 18 1.408-1.414L7.311 13H20.5v-2H7.311l3.57-3.587L9.473 6 3.5 12z"
    />
  </svg>
);
export default ArrowLine;
