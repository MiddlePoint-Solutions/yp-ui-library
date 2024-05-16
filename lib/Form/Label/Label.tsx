import React from "react";

import { Label as HLabel, LabelProps as HLabelProps } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface LabelProps extends HLabelProps {}

export const Label: React.FC<LabelProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <HLabel
      className={twMerge(clsx("text-grayish-200 inline-flex pb-2", className))}
      {...rest}
    >
      {children}
    </HLabel>
  );
};
