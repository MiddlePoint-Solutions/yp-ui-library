import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

interface AvatarProps {
  className?: string;
  src: string;
  variant?: "rounded" | "square";
}

export const Avatar: React.FC<AvatarProps> = ({
  className,
  variant = "rounded",
  src = "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
}) => {
  return (
    <img
      className={twMerge(
        clsx(
          "inline-block border-0 ring-0 shadow-none h-10 w-10 rounded-full ring-white",
          variant === "rounded" ? "rounded-full" : "rounded-md",
          className,
        ),
      )}
      src={src}
      alt="user-avatar"
    />
  );
};
