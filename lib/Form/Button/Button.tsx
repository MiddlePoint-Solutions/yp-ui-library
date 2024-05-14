import { Button as HButton, ButtonProps } from "@headlessui/react";
import clsx from "clsx";
import { FC, Fragment, PropsWithChildren } from "react";
import { EIcon } from "../../Icon/assets/lib/config";
import { Icon } from "../../Icon/Icon";

interface Props extends ButtonProps {
  variant?: "primary" | "secondary";
  icon?: EIcon;
}

export const Button: FC<PropsWithChildren<Props>> = ({
  children,
  variant = "primary",
  icon,
}) => {
  return (
    <HButton as={Fragment}>
      {() => (
        <button
          className={clsx(
            "flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-medium",
            variant === "secondary" &&
              "bg-button-secondary-base hover:bg-button-secondary-hover text-button-secondary-text",
            variant === "primary" &&
              "bg-button-primary-base hover:bg-button-primary-hover text-button-primary-text",
          )}
        >
          {icon && <Icon size={1.25} iconName={icon} />}
          {children}
        </button>
      )}
    </HButton>
  );
};
