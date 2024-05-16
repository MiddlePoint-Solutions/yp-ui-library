import {
  Menu as HMenu,
  MenuButton as HMenuButton,
  MenuItem as HMenuItem,
  MenuItems as HMenuItems,
} from "@headlessui/react";
import clsx from "clsx";

import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const MenuItems: React.FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <HMenuItems
      anchor="bottom"
      className={twMerge(clsx("bg-background-menu p-1 rounded-xl", className))}
      {...rest}
    >
      {children}
    </HMenuItems>
  );
};

export {
  HMenu as Menu,
  HMenuButton as MenuButton,
  HMenuItem as MenuItem,
  MenuItems,
};
