import { Button as HButton, ButtonProps } from "@headlessui/react";
import clsx from "clsx";
import { FC, Fragment } from "react";
import { EIcon } from "../../Icon/assets/lib/config";
import { Icon } from "../../Icon/Icon";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonProps {
  variant?: "primary" | "secondary";
  icon?: EIcon;
  size?: number;
}

export const IconButton: FC<Props> = ({
  variant = "primary",
  size = 1.75,
  icon,
}) => {
  return (
    <HButton as={Fragment}>
      {() => (
        <button
          className={twMerge(
            clsx(
              "flex items-center p-4 text-sm rounded-xl",
              variant === "secondary" &&
                "bg-button-secondary-base hover:bg-button-secondary-hover text-button-secondary-text",
              variant === "primary" &&
                "bg-button-primary-base hover:bg-button-primary-hover text-button-primary-text",
            ),
          )}
        >
          {icon && <Icon size={size} iconName={icon} />}
        </button>
      )}
    </HButton>
  );
};
