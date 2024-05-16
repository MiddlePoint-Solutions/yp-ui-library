import { Button as HButton, ButtonProps } from "@headlessui/react";
import clsx from "clsx";
import { FC, Fragment } from "react";
import { EIcon } from "../../Icon/assets/lib/config";
import { Icon } from "../../Icon/Icon";
import { twMerge } from "tailwind-merge";

export interface IconButtonProps extends ButtonProps {
  variant?: "primary" | "secondary";
  icon?: EIcon;
  size?: number;
}

export const IconButton: FC<IconButtonProps> = ({
  variant = "primary",
  size = 1.75,
  icon,
  className,
  ...rest
}) => {
  return (
    <HButton as={Fragment}>
      {() => (
        <button
          {...rest}
          className={twMerge(
            clsx(
              "ripple",
              "flex items-center p-4 text-sm rounded-xl",
              variant === "secondary" &&
                "bg-button-secondary-base hover:bg-button-secondary-hover text-button-secondary-text",
              variant === "primary" &&
                "bg-button-primary-base hover:bg-button-primary-hover text-button-primary-text",
              className,
            ),
          )}
        >
          {icon && <Icon size={size} iconName={icon} />}
        </button>
      )}
    </HButton>
  );
};
