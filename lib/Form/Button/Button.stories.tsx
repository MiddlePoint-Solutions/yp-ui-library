import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";
import React from "react";
import { EIcon } from "../../Icon/assets/lib/config";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    backgrounds: {
      default: "black",
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
  },

  render: (props) => {
    return <Button isLoading {...props} />;
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
  render: (props) => {
    return <Button isLoading {...props} />;
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Ghost: Story = {
  args: {
    children: "Button",
    variant: "ghost",
  },
  render: (props) => {
    return <Button {...props} />;
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NoIndent: Story = {
  args: {
    children: "Button",
    variant: "primary",
    noIndent: true,
  },
  render: (props) => {
    return <Button {...props} />;
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Text: Story = {
  args: {
    children: "Button",
    variant: "text",
    noIndent: true,
  },
  render: (props) => {
    return <Button {...props} />;
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithIcon: Story = {
  args: {
    children: "Button",
    variant: "primary",
  },
  render: (props) => {
    return <Button icon={EIcon.Logout} {...props} />;
  },
};
