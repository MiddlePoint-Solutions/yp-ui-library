import uniqueId from "lodash/uniqueId";

import React from "react";
import { EIcon, iconMap } from "./assets/lib/config";

interface IProps {
  iconName: EIcon;
  color?: string;
  strokeWidth?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IProps> = (props) => {
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
      className={`flex ${className}`}
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
