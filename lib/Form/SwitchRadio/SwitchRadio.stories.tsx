import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { SwitchRadio } from "./SwitchRadio";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  component: SwitchRadio,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "left",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof SwitchRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    selected: "option1",
    onChange: () => {},
    options: [
      { label: "1.0", value: "option1" },
      { label: "1.5", value: "option2" },
      { label: "2", value: "option3" },
      { label: "2.5", value: "option4" },
    ],
  },
  render: ({ selected, options }) => {
    const [checked, setChecked] = React.useState(selected);

    return (
      <SwitchRadio selected={checked} options={options} onChange={setChecked} />
    );
  },
};
