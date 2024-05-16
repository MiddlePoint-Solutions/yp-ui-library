import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";
import { Field } from "@headlessui/react";
import { Input } from "../Input/Input";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  component: Label,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "left",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Full Name",
  },
  render: ({ children }) => {
    return (
      <Field>
        <Label>{children}</Label>
        <Input type="text" name="full_name" />
      </Field>
    );
  },
};
