import type { SVGProps } from "react";
const Checked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.262 3.6C13.196 2.532 12.662 2 12 2s-1.196.533-2.262 1.6c-.64.64-1.274.936-2.186.936-.796 0-1.93-.154-2.552.473-.618.623-.464 1.752-.464 2.543 0 .912-.297 1.546-.937 2.186C2.533 10.804 2 11.338 2 12s.533 1.196 1.6 2.262c.716.717.936 1.18.936 2.186 0 .796-.154 1.93.473 2.552.623.617 1.752.464 2.543.464.971 0 1.44.19 2.133.883.59.59 1.381 1.653 2.315 1.653s1.725-1.063 2.315-1.653c.694-.693 1.162-.883 2.133-.883.791 0 1.92.154 2.543-.464m1.41-9.262C21.467 10.804 22 11.338 22 12s-.533 1.196-1.6 2.262c-.716.717-.936 1.18-.936 2.186 0 .796.154 1.93-.473 2.552m0 0H19"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.5 9.5 12 13l9-10"
    />
  </svg>
);
export default Checked;
