import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  component: Switch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "left",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    checked: true,
    setChecked: () => {},
  },
  render: ({ disabled, checked: defaultChecked }) => {
    const [checked, setChecked] = React.useState(defaultChecked);

    return (
      <Switch checked={checked} setChecked={setChecked} disabled={disabled} />
    );
  },
};
