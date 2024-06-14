import React, { Fragment, forwardRef } from "react";

import { Input as HInput, InputProps as HInputProps } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface InputProps extends HInputProps {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...rest }, ref) => {
    return (
      <HInput type="text" as={Fragment} {...rest} ref={ref}>
        {({ disabled }) => (
          <input
            className={twMerge(
              clsx(
                "bg-transparent text-sm text-white border border-white rounded-xl p-5 w-full",
                "outline-none",
                disabled && "cursor-not-allowed border-grayish-200",
              ),
            )}
          />
        )}
      </HInput>
    );
  },
);
