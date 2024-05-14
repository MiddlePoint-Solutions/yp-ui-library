import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Icon } from "./Icon";
import React from "react";
import { EIcon } from "./assets/lib/config";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  component: Icon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    backgrounds: {
      default: "white",
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    iconName: { control: "select", options: Object.keys(EIcon) },
    strokeWidth: { control: "number" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AllIcons: Story = {
  args: {
    iconName: EIcon.Bars,
    size: 2,
    color: "black",
  },
  render: (props) => {
    const allIcons = Object.keys(EIcon).map((iconName) => iconName);

    return (
      <div className="flex gap-2 flex-wrap">
        {allIcons.map((iconName) => {
          return (
            <Icon {...props} iconName={iconName as EIcon} key={iconName} />
          );
        })}
      </div>
    );
  },
};

export const SingleIcon: Story = {
  args: {
    iconName: EIcon.Bars,
    size: 2,
    color: "black",
  },
  render: (props) => {
    return <Icon {...props} key={props.iconName} />;
  },
};
