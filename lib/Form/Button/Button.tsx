import {
  Button as HButton,
  ButtonProps as HButtonProps,
} from "@headlessui/react";
import clsx from "clsx";
import { Fragment, PropsWithChildren, forwardRef } from "react";
import { EIcon } from "../../Icon/assets/lib/config";
import { Icon } from "../../Icon/Icon";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends HButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "text";
  noIndent?: boolean;
  icon?: EIcon;
  isLoading?: boolean;
}

export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
>((props, ref) => {
  const {
    children,
    variant = "primary",
    noIndent,
    icon,
    className,
    disabled,
    ...rest
  } = props;

  return (
    <HButton as={Fragment}>
      {() => (
        <button
          {...rest}
          ref={ref}
          disabled={disabled || props.isLoading}
          className={twMerge(
            clsx(
              "ripple overflow-hidden",
              "flex justify-center items-center gap-2 px-8 py-4 rounded-xl text-sm font-medium",
              variant === "secondary" &&
                "bg-button-secondary-base hover:bg-button-secondary-hover text-button-secondary-text",
              variant === "primary" &&
                "bg-button-primary-base hover:bg-button-primary-hover text-button-primary-text",
              variant === "ghost" &&
                "bg-transparent hover:bg-grayish-400 text-white",
              disabled && "opacity-50 cursor-not-allowed",
              variant === "text" && "bg-transparent text-white p-0",
              noIndent && "gap-0 p-1 hover:bg-initial",
              className,
            ),
          )}
        >
          {icon && <Icon size={1.25} iconName={icon} />}
          {children}
          {props.isLoading && (
            <Icon
              size={1.25}
              iconName={EIcon.Spinner}
              className="animate-spin"
            />
          )}
        </button>
      )}
    </HButton>
  );
});
