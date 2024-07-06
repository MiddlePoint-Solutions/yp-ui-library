import { extendTailwindMerge } from "tailwind-merge";

export const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": ["text-xss", "text-caption", "text-6xl"],
      "bg-color": ["background-menu", "background-menuContent"],
    },
  },
});
