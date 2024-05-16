import React from "react";

import {
  Textarea as HTextarea,
  TextareaProps as HTextareaProps,
} from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface TextareaProps extends HTextareaProps {}

export const TextArea: React.FC<TextareaProps> = ({ ...rest }) => {
  return (
    <HTextarea
      className={twMerge(
        clsx(
          "bg-transparent text-sm text-white border border-white rounded-xl p-5 w-full",
          "outline-none",
          "data-[disabled]:cursor-not-allowed border-grayish-200",
        ),
      )}
      {...rest}
    />
  );
};
