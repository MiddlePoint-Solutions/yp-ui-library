import { Button as HButton, ButtonProps } from "@headlessui/react";
import clsx from "clsx";
import { FC, Fragment, forwardRef } from "react";
import { EIcon } from "../../Icon/assets/lib/config";
import { Icon } from "../../Icon/Icon";
import { twMerge } from "tailwind-merge";

export interface IconButtonProps extends ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  icon?: EIcon;
  size?: number;
}

export const IconButton: FC<IconButtonProps> = forwardRef<
  HTMLButtonElement,
  IconButtonProps
>((props, ref) => {
  const { variant = "primary", size = 1.75, icon, className, ...rest } = props;
  return (
    <HButton as={Fragment}>
      {() => (
        <button
          {...rest}
          ref={ref}
          className={twMerge(
            clsx(
              "ripple",
              "flex items-center p-4 text-sm rounded-xl",
              variant === "secondary" &&
                "bg-button-secondary-base hover:bg-button-secondary-hover text-button-secondary-text",
              variant === "primary" &&
                "bg-button-primary-base hover:bg-button-primary-hover text-button-primary-text",
              variant === "ghost" &&
                "bg-transparent hover:bg-grayish-400 text-white",
              className,
            ),
          )}
        >
          {icon && <Icon size={size} iconName={icon} />}
        </button>
      )}
    </HButton>
  );
});
