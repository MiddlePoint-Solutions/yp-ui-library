import type { SVGProps } from "react";
const CheckedStroke = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M20.5 6.396 8.481 19 3.5 14.014l1.429-1.43 3.519 3.522L19.038 5z"
      clipRule="evenodd"
    />
  </svg>
);
export default CheckedStroke;
