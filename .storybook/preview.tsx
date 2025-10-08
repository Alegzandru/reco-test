import type { Preview } from '@storybook/react-vite';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from '../src/theme/chakraTheme';
import React from 'react';

const withChakra = (Story: React.FC) => (
  <ChakraProvider value={system}>
    <Story />
  </ChakraProvider>
);

const preview: Preview = {
  decorators: [withChakra],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
