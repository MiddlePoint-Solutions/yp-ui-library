import type { Meta, StoryObj } from "@storybook/react";
import { ToastContainer, toaster } from "./index";

import { Button } from "../../Form/Button";

import React from "react";
import { TypeOptions } from "react-toastify";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  component: ToastContainer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    backgrounds: {
      default: "black",
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //   args: { onClick: fn() },
} satisfies Meta<typeof ToastContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
  render: (props) => {
    const click = (type: TypeOptions) => () => {
      if (type === "info") {
        toaster.info({
          title: "Info Message",
          desc: "This is an info message",
          type: "info",
        });
      } else if (type === "success") {
        toaster.success({
          title: "Success Message",
          desc: "This is an sucess message",
          type: "success",
        });
      } else if (type === "warning") {
        toaster.warning({
          title: "Warning Message",
          desc: "This is a warning message",
          type: "warning",
        });
      } else if (type === "error") {
        toaster.error({
          title: "Error Message",
          desc: "This is an error message",
          type: "error",
        });
      } else {
        toaster({
          title: "General Message",
          desc: "This is a general message",
          type: "default",
        });
      }
    };
    return (
      <div className="flex flex-col items-center gap-4">
        <Button onClick={click("default")}>General Message</Button>
        <Button onClick={click("warning")}>Warning</Button>
        <Button onClick={click("info")}>Info</Button>
        <Button onClick={click("success")}>Success</Button>
        <Button onClick={click("error")}>Error</Button>
        <ToastContainer {...props} />
      </div>
    );
  },
};
