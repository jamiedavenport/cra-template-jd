import { addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "../src/tailwind.out.css";

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
