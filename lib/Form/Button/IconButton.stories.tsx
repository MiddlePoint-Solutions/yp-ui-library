import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { IconButton } from "./IconButton";
import React from "react";
import { EIcon } from "../../Icon/assets/lib/config";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  component: IconButton,
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
    children: { control: "text" },
    icon: { control: "select", options: Object.keys(EIcon) },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    icon: EIcon.Logout,
  },

  render: (props) => {
    return <IconButton {...props} />;
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Secondary: Story = {
  args: {
    variant: "secondary",
    icon: EIcon.Logout,
  },
  render: (props) => {
    return <IconButton {...props} />;
  },
};
