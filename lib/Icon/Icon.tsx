import uniqueId from "lodash/uniqueId";

import React from "react";
import { EIcon, iconMap } from "./assets/lib/config";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export interface IconProps {
  iconName: EIcon;
  color?: string;
  strokeWidth?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = (props) => {
  const { iconName, color, className, strokeWidth, onClick, size } = props;
  const IconComponent = iconMap[iconName];

  return (
    <span
      onClick={onClick}
      style={{
        width: `${size}em`,
        height: `${size}em`,
        color,
      }}
      className={twMerge(clsx("flex", className))}
    >
      <IconComponent
        style={{
          width: `${size}em`,
          height: `${size}em`,
          strokeWidth: `${strokeWidth}`,
        }}
        id={uniqueId()}
      />
    </span>
  );
};
