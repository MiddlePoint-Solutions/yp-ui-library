import type { Preview } from "@storybook/react";
import "../lib/global.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "black",
      values: [
        {
          name: "white",
          value: "#fff",
        },
        {
          name: "black",
          value: "#000",
        },
      ],
    },
  },
};

export default preview;
