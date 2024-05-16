import type { Meta, StoryObj } from "@storybook/react";

import * as Menu from "./Menu";
import React, { Fragment } from "react";

import { Button, IconButton } from "../Form/Button";
import { EIcon } from "../Icon/assets/lib/config";
import { Avatar } from "../Info/Avatar/Avatar";
import { Switch } from "../Form/Switch";
import { SwitchRadio } from "../Form/SwitchRadio/SwitchRadio";
import { Typography } from "../Typography/Typography";

import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { Icon } from "../Icon/Icon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  component: Menu.Menu,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "top center",
    backgrounds: {
      default: "white",
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //   args: { onClick: fn() },
} satisfies Meta<typeof Menu.Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [speed, setSpeed] = React.useState("1x");

    return (
      <Menu.Menu>
        <Menu.MenuButton as={Fragment}>
          <IconButton icon={EIcon.Bars} />
        </Menu.MenuButton>
        <Menu.MenuItems className="w-[400px]">
          <div
            className={twMerge(
              clsx("flex flex-col rounded-xl bg-background-menuContent p-4"),
            )}
          >
            <div className={twMerge(clsx("flex py-3"))}>
              <Avatar src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
              <div className="flex flex-col ml-4">
                <Typography variant={3} weight="medium" className="text-white">
                  Name Lastname
                </Typography>
                <Typography
                  variant={2}
                  weight="medium"
                  className="text-white opacity-50"
                >
                  namelastname@gmail.com
                </Typography>
              </div>
            </div>
            <Button variant="secondary" icon={EIcon.Play}>
              My collection
            </Button>
            <div className="border-t border-grayish-600 my-4" />
            <div className="flex flex-col gap-3">
              <div className="flex items-center py-3">
                <Icon iconName={EIcon.Ring} className="text-white text-2xl" />
                <Typography
                  variant={4}
                  weight="medium"
                  className="ml-2 text-white"
                >
                  Notifications
                </Typography>
                <Switch
                  className="ml-auto"
                  checked={open}
                  setChecked={setOpen}
                />
              </div>
              <div className="flex items-center py-3">
                <Icon
                  iconName={EIcon.PlayDotted}
                  className="text-white text-2xl"
                />
                <Typography
                  variant={4}
                  weight="medium"
                  className="ml-2 text-white"
                >
                  Video playback speed
                </Typography>
                <SwitchRadio
                  className="ml-auto"
                  options={[
                    { label: "1", value: "1x" },
                    { label: "1.5", value: "1.5x" },
                    { label: "2", value: "2x" },
                  ]}
                  onChange={setSpeed}
                  selected={speed}
                />
              </div>
              <Button
                className="flex py-3 text-left pl-2 -ml-2"
                variant="ghost"
              >
                <Icon iconName={EIcon.Note} className="text-white text-2xl" />
                <Typography
                  variant={4}
                  weight="medium"
                  className="ml-2 text-white"
                >
                  Subscriptions
                </Typography>
              </Button>
              <Button
                className="flex py-3 text-left pl-2 -ml-2"
                variant="ghost"
              >
                <Icon iconName={EIcon.Listen} className="text-white text-2xl" />
                <Typography
                  variant={4}
                  weight="medium"
                  className="ml-2 text-white"
                >
                  Support
                </Typography>
              </Button>
            </div>
          </div>
          <Button
            className="flex w-full py-3 text-left pl-3 mt-2"
            variant="ghost"
          >
            <Icon iconName={EIcon.Logout} className="text-white text-2xl" />
            <Typography variant={4} weight="medium" className="ml-2 text-white">
              Logout
            </Typography>
          </Button>
          <Typography
            variant={2}
            weight="medium"
            className="opacity-50 py-1 text-white text-center"
          >
            Terms of use
          </Typography>
        </Menu.MenuItems>
      </Menu.Menu>
    );
  },
};
