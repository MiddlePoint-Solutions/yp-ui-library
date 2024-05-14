import React from "react";
import { Switch as HSwitch } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface Props {
  disabled?: boolean;
  checked: boolean;
  setChecked: (enabled: boolean) => void;
}

export const Switch: React.FC<Props> = ({
  checked = true,
  disabled,
  setChecked,
}) => {
  return (
    <HSwitch
      checked={checked}
      onChange={setChecked}
      disabled={disabled}
      className={twMerge(
        clsx(
          "group inline-flex h-5 w-9 items-center rounded-full  transition",
          "bg-grayish-900 border border-grayish-600",
        ),
      )}
    >
      {({ checked, disabled }) => (
        <span
          aria-hidden="true"
          className={twMerge(
            clsx(
              "size-5 rounded-full transition",
              checked
                ? "translate-x-4 bg-white"
                : "translate-x-0 bg-grayish-400",
              disabled && "cursor-not-allowed opacity-50",
            ),
          )}
        />
      )}
    </HSwitch>
  );
};
