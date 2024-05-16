import clsx from "clsx";
import React, { PropsWithChildren, useMemo } from "react";
import { twMerge } from "tailwind-merge";

type TypographySize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

interface TypographyProps {
  className?: string;
  variant: TypographySize;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
}

export const Typography: React.FC<PropsWithChildren<TypographyProps>> = ({
  variant,
  className,
  children,
  weight = "normal",
  as = "p",
}) => {
  const Component = as;
  const sizeClass = useMemo(() => {
    switch (variant) {
      case 0:
        return "text-caption";
      case 1:
        return "text-xss";
      case 2:
        return "text-xs";
      case 3:
        return "text-sm";
      case 4:
        return "text-base";
      case 5:
        return "text-xl";
      case 6:
        return "text-2xl";
      case 7:
        return "text-4xl";
      case 8:
        return "text-6xl";
    }
  }, [variant]);

  const weightClass = useMemo(() => {
    switch (weight) {
      case "light":
        return "font-light";
      case "normal":
        return "font-normal";
      case "medium":
        return "font-medium";
      case "semibold":
        return "font-semibold";
      case "bold":
        return "font-bold";
    }
  }, [weight]);

  return (
    <Component className={twMerge(clsx(sizeClass, weightClass, className))}>
      {children}
    </Component>
  );
};
