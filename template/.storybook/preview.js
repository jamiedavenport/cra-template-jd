import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core"; // TODO: Use custom theme
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    {storyFn()}
  </ThemeProvider>
));

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});