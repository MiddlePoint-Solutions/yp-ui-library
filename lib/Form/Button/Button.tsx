import {
  Button as HButton,
  ButtonProps as HButtonProps,
} from "@headlessui/react";
import clsx from "clsx";
import { FC, Fragment, PropsWithChildren } from "react";
import { EIcon } from "../../Icon/assets/lib/config";
import { Icon } from "../../Icon/Icon";

export interface ButtonProps extends HButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  icon?: EIcon;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant = "primary",
  icon,
  className,
  ...rest
}) => {
  return (
    <HButton as={Fragment}>
      {() => (
        <button
          {...rest}
          className={clsx(
            "ripple",
            "flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-medium",
            variant === "secondary" &&
              "bg-button-secondary-base hover:bg-button-secondary-hover text-button-secondary-text",
            variant === "primary" &&
              "bg-button-primary-base hover:bg-button-primary-hover text-button-primary-text",
            variant === "ghost" &&
              "bg-transparent hover:bg-grayish-400 text-white",
            className,
          )}
        >
          {icon && <Icon size={1.25} iconName={icon} />}
          {children}
        </button>
      )}
    </HButton>
  );
};
