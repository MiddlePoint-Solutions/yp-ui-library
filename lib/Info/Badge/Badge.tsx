import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export interface BadgeProps {
  className?: string;
  variant?: "primary" | "secondary";
}

export const Badge: React.FC<PropsWithChildren<BadgeProps>> = ({
  className,
  children,
  variant = "primary",
}) => {
  return (
    <span
      className={twMerge(
        clsx(
          "rounded-md px-[10px] py-[5px] text-xss",
          variant === "primary" &&
            "bg-badge-primary-base text-badge-primary-text",
          variant === "secondary" &&
            "bg-badge-secondary-base text-badge-secondary-text",
          className,
        ),
      )}
    >
      {children}
    </span>
  );
};
