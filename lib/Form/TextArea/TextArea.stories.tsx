import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./TextArea";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  component: TextArea,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "left",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  parameters: {
    layout: "centered",
  },
  args: {},
  render: ({ value, onChange }) => {
    return (
      <TextArea
        placeholder="jamil@email.com"
        value={value}
        onChange={onChange}
      />
    );
  },
};
