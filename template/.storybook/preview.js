import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";
// TODO: Use custom theme

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    {storyFn()}
  </ThemeProvider>
));
