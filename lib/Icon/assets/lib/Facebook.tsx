import type { SVGProps } from "react";
const Facebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10.5} fill="url(#prefix__a)" />
    <path
      fill="#fff"
      d="m15.91 15.211.467-2.963h-2.918v-1.923c0-.81.407-1.602 1.714-1.602H16.5V6.2S15.296 6 14.145 6c-2.404 0-3.974 1.42-3.974 3.989v2.259H7.5v2.963h2.671v7.165a10.9 10.9 0 0 0 3.288 0V15.21z"
    />
    <defs>
      <linearGradient
        id="prefix__a"
        x1={12}
        x2={12}
        y1={1.5}
        y2={22.438}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#18ACFE" />
        <stop offset={1} stopColor="#0163E0" />
      </linearGradient>
    </defs>
  </svg>
);
export default Facebook;
