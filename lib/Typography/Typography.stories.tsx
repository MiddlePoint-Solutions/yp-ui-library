import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./Typography";
import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  component: Typography,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    backgrounds: {
      default: "white",
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //   args: { onClick: fn() },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: "Typography",
    variant: 0,
  },
  render: (props) => {
    return (
      <div className="flex flex-col items-center">
        <Typography {...props} variant={0}>
          {props.children} (9px)
        </Typography>
        <Typography {...props} variant={1}>
          {props.children} (10px)
        </Typography>
        <Typography {...props} variant={2}>
          {props.children} (12px)
        </Typography>
        <Typography {...props} variant={3}>
          {props.children} (14px)
        </Typography>
        <Typography {...props} variant={4}>
          {props.children} (16px)
        </Typography>
        <Typography {...props} variant={5}>
          {props.children} (20px)
        </Typography>
        <Typography {...props} variant={6}>
          {props.children} (24px)
        </Typography>
        <Typography {...props} variant={7}>
          {props.children} (36px)
        </Typography>
        <Typography {...props} variant={8}>
          {props.children} (64px)
        </Typography>
      </div>
    );
  },
};
